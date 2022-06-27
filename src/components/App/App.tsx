import React from 'react';
import {Route, Routes} from "react-router-dom";
import {HeaderLogged} from "../Header/HeaderLogged";
import {HeaderWelcome} from "../Header/HeaderWelcome";
import {Main} from '../../views/Main';
import {Trainings} from "../../views/Trainings";
import {Stats} from "../../views/Stats";
import {RegisterForm} from "../../views/RegisterForm";
import {NotFound} from "../../views/NotFound";
import {LoginForm} from "../../views/LoginForm";

import './App.css';

const logged = false;

export const App = () => {
    return (
        <div className='App__container'>
            {logged ? <HeaderLogged/> : <HeaderWelcome/>}
            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='/trainings' element={<Trainings/>}/>
                <Route path='/stats' element={<Stats/>}/>
                <Route path='/register' element={<RegisterForm/>}/>
                <Route path='/sign-in' element={<LoginForm/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </div>

    );
}
