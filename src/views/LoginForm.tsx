import React, {ChangeEvent, FormEvent, useState} from 'react';
import {PasswordPreview} from '../components/PasswordPreview/PasswordPreview';
import {Input} from "../components/Input/Input";
import {Button} from "../components/Button/Button";

import './LoginForm.css';

export const LoginForm = () => {

    const[loginData, setLoginData] = useState({
        email:'',
        password:'',
        className:'',
        text:'',
    });

    const sendForm = (e: FormEvent) => {
        e.preventDefault();
        if(loginData.email.length <= 0 || loginData.password.length <= 0) {
            alert('Email and password are required!');
            throw new Error('Email and password are required!');
        }
        if(loginData.email === 'a@b.c' && loginData.password === '1234'){
            return(
                setLoginData({
                    email:'',
                    password: '',
                    className: 'LoginForm__positive-response',
                    text: 'Logged in!',
                })
            )
        }else {
            return(
                setLoginData({
                    email:'',
                    password: '',
                    className: 'LoginForm__negative-response',
                    text: 'Incorrect data!',
                })
            )
        }
    }

    const change = (e: ChangeEvent<HTMLInputElement>) => (
        setLoginData(loginData => ({
            ...loginData,
            className: '',
            text: '',
            [e.target.name]: e.target.value,
        }))
    )

    const changePassword = (e: ChangeEvent<HTMLInputElement>, value: string) => (
        setLoginData(loginData => ({
            ...loginData,
            className: '',
            text: '',
            password: value,
        }))
    )

    return(
        <div className='LoginForm'>
            <p className={loginData.className}>{loginData.text}</p>
            <form className='LoginForm__form' onSubmit={sendForm}>
                <Input
                    className='LoginForm__input'
                    type="email"
                    name='email'
                    value={loginData.email}
                    placeholder='enter your email...'
                    onChange={change}
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
        </div>
    )
}
