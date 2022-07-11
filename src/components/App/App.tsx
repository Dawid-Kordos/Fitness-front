import React, {createContext, useEffect, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import Cookies from 'universal-cookie';
import {HeaderLogged} from "../Header/HeaderLogged";
import {HeaderWelcome} from "../Header/HeaderWelcome";
import {Main} from '../../views/Main';
import {Trainings} from "../../views/Trainings";
import {Stats} from "../../views/Stats";
import {RegisterForm} from "../../views/RegisterForm";
import {LoginForm} from "../../views/LoginForm";
import {AddTraining} from "../../views/AddTraining";
import {SingleDayTrainingsPreview} from "../../views/SingleDayTrainingsPreview";
import {ErrorPage} from "../../views/ErrorPage";

import './App.css';

interface ActualDateContextType {
    actualDate: string;
    handleSetActualDate: (date: string) => void;
}

export const ActualDateContext = createContext<ActualDateContextType | null>(null);

export const App = () => {
    const cookies = new Cookies();
    const [isLoggedCookie, setIsLoggedCookie] = useState<boolean>(false);
    const [userNameCookie, setUserNameCookie] = useState<string>('');
    const [actualDate, setActualDate] = useState<string>('');

    useEffect(() => {
        setIsLoggedCookie(cookies.get('isLogged'));
        setUserNameCookie(cookies.get('userName'));
    }, []);

    const handleSetActualDate = (date: string) => {
        setActualDate(date);
    }

    return (
        <ActualDateContext.Provider value={{
            actualDate,
            handleSetActualDate,
        }}>
            <div className='App__container'>
                {isLoggedCookie ? <HeaderLogged userName={userNameCookie}/> : <HeaderWelcome/>}
                <Routes>
                    <Route path='/' element={<Main/>}/>
                    <Route path='/trainings' element={<Trainings/>}/>
                    <Route path='/trainings/single-day' element={<SingleDayTrainingsPreview actualDate={actualDate}/>}/>
                    <Route path='/trainings/add-form' element={<AddTraining actualDate={actualDate}/>}/>
                    <Route path='/stats' element={<Stats/>}/>
                    <Route path='/register' element={<RegisterForm/>}/>
                    <Route path='/sign-in' element={<LoginForm/>}/>
                    <Route path='*' element={<ErrorPage message='This page does not exists.'/>}/>
                </Routes>
                {/*            <Footer />*/}
            </div>
        </ActualDateContext.Provider>
    );
}
