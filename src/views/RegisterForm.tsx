import React, {ChangeEvent, FormEvent, useState} from 'react';
import {PasswordPreview} from "../components/PasswordPreview/PasswordPreview";
import {Input} from "../components/Input/Input";
import {Button} from "../components/Button/Button";

import './RegisterForm.css';

export const RegisterForm = () => {

    const [registerData, setRegisterData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password1: '',
        password2: '',
    });

    const sendForm = (e: FormEvent) => {
        e.preventDefault();
        if (registerData.firstName.length < 3 || registerData.lastName.length < 3) {
            alert('First and last name must have at least 3 characters!');
            throw new Error('First and last name must have at least 3 characters!');
        }
        if (registerData.email.length === 0) {
            alert('Email is required!');
            throw new Error('Email is required!');
        }
        if (registerData.password1.length < 8 || registerData.password2.length < 8) {
            alert('Password must have at least 8 characters!');
            throw new Error('First and last name must have at least 8 characters!');
        }
        if (registerData.password1 !== registerData.password2) {
            alert('Password and password confirmation are not equal!');
            throw new Error('Password and password confirmation are not equal!');
        }

        setRegisterData({
            firstName: '',
            lastName: '',
            email: '',
            password1: '',
            password2: '',
        });

        alert('User registered!');
    }

    const change = (e: ChangeEvent<HTMLInputElement>): void => (
        setRegisterData(registerData => ({
            ...registerData,
            [e.target.name]: e.target.value,
        }))
    )

    const changePassword = (e: ChangeEvent<HTMLInputElement>, value: string): void => (
        setRegisterData(registerData => ({
            ...registerData,
            [e.target.name]: value,
        }))
    )

    return (
        <div className='RegisterForm'>
            <h1 className='RegisterForm__header'>Registration</h1>
            <form className='RegisterForm__form' onSubmit={sendForm}>
                <Input
                    className='RegisterForm__input'
                    type="text"
                    name='firstName'
                    value={registerData.firstName}
                    placeholder='enter your first name...'
                    style={registerData.firstName.length < 3 && registerData.firstName.length > 0
                        ? {backgroundColor: '#f69494'}
                        : {backgroundColor: '#98f698'}}
                    onChange={change}
                />
                <Input
                    className='RegisterForm__input'
                    type="text"
                    name='lastName'
                    value={registerData.lastName}
                    placeholder='enter your last name...'
                    style={registerData.lastName.length < 3 && registerData.lastName.length > 0
                        ? {backgroundColor: '#f69494'}
                        : {backgroundColor: '#98f698'}}
                    onChange={change}
                />
                <Input
                    className='RegisterForm__input'
                    type="email"
                    name='email'
                    value={registerData.email}
                    placeholder='enter your email...'
                    onChange={change}
                />
                <PasswordPreview
                    className='RegisterForm__input'
                    name='password1'
                    value={registerData.password1}
                    placeholder='enter your password...'
/*                    style={registerData.password1.length < 8
                        ? {color: '#ff0000'}
                        : {color: '#00ff00'}}*/
                    onChange={changePassword}
                />
                <PasswordPreview
                    className='RegisterForm__input'
                    name='password2'
                    value={registerData.password2}
                    placeholder='confirm your password...'
/*                    style={registerData.password2.length < 8
                        ? {color: '#ff0000'}
                        : {color: '#00ff00'}}*/
                    onChange={changePassword}
                />
                <Button
                    className='RegisterForm__btn'
                    text='Register'
                />
            </form>
        </div>
    )
}
