import React, {ChangeEvent, FormEvent, useState} from 'react';
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import {PasswordPreview} from "../components/PasswordPreview/PasswordPreview";
import {Input} from "../components/Input/Input";
import {Button} from "../components/Button/Button";
import {registeringDefaultData} from "../utils/registeringDefaultData";
import {ErrorPage} from "./ErrorPage";
import {UserDataEntity} from 'types';

import './RegisterForm.css';

export const RegisterForm = () => {
    const navigate = useNavigate();

    const [registerData, setRegisterData] = useState<UserDataEntity>(registeringDefaultData);
    const [errorMessage, setErrorMessage] = useState<string>('');

    const sendForm = async (e: FormEvent) => {
        e.preventDefault();

        try {
            const res = await fetch('http://localhost:3001/users-data/register', {
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

/*        if (registerData.firstName && registerData.lastName && registerData.email && registerData.password && registerData.password1) {
            navigate('/sign-in');
        }*/
    }

    const changeInput = (e: ChangeEvent<HTMLInputElement>): void => (
        setRegisterData((prev: UserDataEntity) => ({
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

    if (errorMessage) {
        return <ErrorPage message={errorMessage}/>
    }

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
                    style={registerData.firstName.length < 3
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
                    style={registerData.lastName.length < 3
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
                    style={registerData.email.includes('@') === false || registerData.email.includes('.') === false
                        ? {backgroundColor: '#f69494'}
                        : {backgroundColor: '#98f698'}}
                    onChange={changeInput}
                />
                <PasswordPreview
                    className='RegisterForm__input'
                    name='password'
                    value={registerData.password}
                    placeholder='enter your password...'
                    onChange={changePassword}
                />
                <PasswordPreview
                    className='RegisterForm__input'
                    name='password1'
                    value={registerData.password1}
                    placeholder='confirm your password...'
                    onChange={changePassword}
                />
                <Button
                    className='RegisterForm__btn'
                    text='Register'
                />
            </form>
                <Link className='RegisterForm__link' to='/sign-in'>Sign in</Link>
        </div>
    )
}
