import React, {ChangeEvent, FormEvent, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {PasswordPreview} from '../components/PasswordPreview/PasswordPreview';
import {Input} from "../components/Input/Input";
import {Button} from "../components/Button/Button";

import './LoginForm.css';

interface Props {
    loginStatus: (status: boolean) => void;
}

export const LoginForm = (props: Props) => {
    const navigate = useNavigate();

    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    });

    const sendForm = (e: FormEvent) => {
        e.preventDefault();

        if (loginData.email.length <= 0 || loginData.password.length <= 0) {
            alert('Email and password are required!');
            throw new Error('Email and password are required!');
        }
        if (loginData.email === 'a@b.c' && loginData.password === '1234') {
            props.loginStatus(true);
            setLoginData({
                email: '',
                password: '',
            });
            navigate('/trainings');
        }
    }

    const changeLogin = (e: ChangeEvent<HTMLInputElement>) => (
        setLoginData(loginData => ({
            ...loginData,
            [e.target.name]: e.target.value,
        }))
    )

    const changePassword = (e: ChangeEvent<HTMLInputElement>, value: string) => (
        setLoginData(loginData => ({
            ...loginData,
            password: value,
        }))
    )

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
