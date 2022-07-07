import React, {ChangeEvent, FormEvent, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import Cookies from 'universal-cookie';
import {PasswordPreview} from '../components/PasswordPreview/PasswordPreview';
import {Input} from "../components/Input/Input";
import {Button} from "../components/Button/Button";
import {ErrorPage} from "./ErrorPage";
import {LoginDataType} from "types";

import './LoginForm.css';

export const LoginForm = () => {
    const navigate = useNavigate();
    const cookies = new Cookies();

    const [loginData, setLoginData] = useState<LoginDataType>({
        email: '',
        password: '',
    });
    const [errorMessage, setErrorMessage] = useState<string>('');

    const sendForm = async (e: FormEvent) => {
        e.preventDefault();

        try {
            const res = await fetch('http://localhost:3001/users-data/sign-in', {
                method: "post",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            });

            const message = await res.json();

            if (message.isOk) {
                cookies.set('isLogged', true);
                cookies.set('userName', message.userName);
            }

            message.message && setErrorMessage(message.message);
        } catch (err) {
            console.error(err);
            return <ErrorPage message={errorMessage}/>
        }

        setLoginData({
            email: '',
            password: '',
        });

        const isLoggedCookie = cookies.get('isLogged');

        isLoggedCookie ? navigate('/trainings') : navigate('/sign-in');
        window.location.reload();
    }

    const changeLogin = (e: ChangeEvent<HTMLInputElement>) => (
        setLoginData(loginData => ({
            ...loginData,
            [e.target.name]: e.target.value,
        }))
    );

    const changePassword = (e: ChangeEvent<HTMLInputElement>, value: string) => (
        setLoginData((loginData: LoginDataType) => ({
            ...loginData,
            password: value,
        }))
    );

    return (
        <div className='LoginForm'>
            <h1 className='LoginForm__header'>Login</h1>
            <form className='LoginForm__form' onSubmit={sendForm}>
                <Input
                    className='LoginForm__input'
                    type="email"
                    name='email'
                    value={loginData.email}
                    placeholder='enter your email...'
                    onChange={changeLogin}
                />
                <PasswordPreview
                    className='LoginForm__input'
                    name='password'
                    placeholder='enter your password...'
                    value={loginData.password}
                    onChange={changePassword}
                />
                <Button
                    className='LoginForm__btn'
                    text='Login'
                />
            </form>
            <Link className='LoginForm__link' to='/register'>Register now!</Link>
        </div>
    )
}
