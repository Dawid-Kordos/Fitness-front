import React, {ChangeEvent, FormEvent, useState} from 'react';
import {PasswordPreview} from "../components/PasswordPreview/PasswordPreview";
import {Input} from "../components/Input/Input";
import {Button} from "../components/Button/Button";
import {registeringDefaultData} from "../utils/registeringDefaultData";
import {ErrorPage} from "./ErrorPage";
import {UserDataEntity} from 'types';

import './RegisterForm.css';

export const RegisterForm = () => {

    const [registerData, setRegisterData] = useState<UserDataEntity>(registeringDefaultData);
    const [errorMessage, setErrorMessage] = useState<string>('');

    const sendForm = async (e: FormEvent) => {
        e.preventDefault();
/*        if (registerData.firstName.length < 3 || registerData.lastName.length < 3) {
            alert('First and last name must have at least 3 characters!');
            throw new Error('First and last name must have at least 3 characters!');
        }
        if (registerData.email.length === 0) {
            alert('Email is required!');
            throw new Error('Email is required!');
        }
        if (registerData.password.length < 8 || registerData.password.length < 8) {
            alert('Password must have at least 8 characters!');
            throw new Error('First and last name must have at least 8 characters!');
        }
        if (registerData.password !== registerData.password1) {
            alert('Password and password confirmation are not equal!');
            throw new Error('Password and password confirmation are not equal!');
        }*/

        try {
            const res = await fetch('http://localhost:3001/users-data', {
                method: "post",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(registerData),
            });

            const message = await res.json();

            message.message && setErrorMessage(message.message);
        } catch (err) {
            console.error(err);
            return <ErrorPage message={errorMessage}/>
        }

        setRegisterData(registeringDefaultData);

        alert('User registered!');
    }

    const changeInput = (e: ChangeEvent<HTMLInputElement>): void => (
        setRegisterData((prev:UserDataEntity) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    )

    const changePassword = (e: ChangeEvent<HTMLInputElement>, value: string): void => (
        setRegisterData((prev: UserDataEntity) => ({
            ...prev,
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
                    onChange={changeInput}
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
                    onChange={changeInput}
                />
                <Input
                    className='RegisterForm__input'
                    type="email"
                    name='email'
                    value={registerData.email}
                    placeholder='enter your email...'
                    onChange={changeInput}
                />
                <PasswordPreview
                    className='RegisterForm__input'
                    name='password'
                    value={registerData.password}
                    placeholder='enter your password...'
/*                    style={registerData.password1.length < 8
                        ? {color: '#ff0000'}
                        : {color: '#00ff00'}}*/
                    onChange={changePassword}
                />
                <PasswordPreview
                    className='RegisterForm__input'
                    name='password1'
                    value={registerData.password1}
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
