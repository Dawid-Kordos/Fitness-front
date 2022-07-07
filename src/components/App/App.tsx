import React, {useEffect, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import Cookies from 'universal-cookie';
import {HeaderLogged} from "../Header/HeaderLogged";
import {HeaderWelcome} from "../Header/HeaderWelcome";
import {Main} from '../../views/Main';
import {Trainings} from "../../views/Trainings";
import {Stats} from "../../views/Stats";
import {RegisterForm} from "../../views/RegisterForm";
import {NotFound} from "../../views/NotFound";
import {LoginForm} from "../../views/LoginForm";
import {AddTraining} from "../../views/AddTraining";
import {SingleDayTrainingsPreview} from "../../views/SingleDayTrainingsPreview";

import './App.css';

export const App = () => {
    const cookies = new Cookies();
    const [isLoggedCookie, setIsLoggedCookie] = useState<boolean>(false);
    const [userNameCookie, setUserNameCookie] = useState<string>('');

    useEffect(() => {
        setIsLoggedCookie(cookies.get('isLogged'));
        setUserNameCookie(cookies.get('userName'))
    }, []);

    return (
        <div className='App__container'>
            {isLoggedCookie ? <HeaderLogged userName={userNameCookie}/> : <HeaderWelcome/>}
            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='/trainings' element={<Trainings/>}/>
                <Route path='/trainings/single-day' element={<SingleDayTrainingsPreview/>}/>
                <Route path='/trainings/add-form' element={<AddTraining/>}/>
                <Route path='/stats' element={<Stats/>}/>
                <Route path='/register' element={<RegisterForm />}/>
                <Route path='/sign-in' element={<LoginForm />}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
{/*            <Footer />*/}
        </div>
    );
}
