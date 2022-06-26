import React from 'react';
import {Route, Routes} from "react-router-dom";
import {HeaderLogged} from "../Header/HeaderLogged";
import {HeaderWelcome} from "../Header/HeaderWelcome";
import {Trainings} from "../../views/Trainings";
import {Main} from '../../views/Main';
import {NotFound} from "../../views/NotFound";
import {Stats} from "../../views/Stats";

import './App.css';

const logged = true;

export const App = () => {
    return (
        <>
            {logged ? <HeaderLogged/> : <HeaderWelcome/>}
            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='/trainings' element={<Trainings/>}/>
                <Route path='/stats' element={<Stats/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </>

    );
}
