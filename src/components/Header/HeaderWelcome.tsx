import React from 'react';
import {Link} from "react-router-dom";

import './Header.css';

export const HeaderWelcome = () => (
    <header className='Header'>
        <nav className='Header__nav'>
            <span className="material-symbols-outlined">
                directions_run
            </span>
            <Link className='Header__link-logo' to='/'>Fitness</Link>
            <button className='Header__btn-sign-in'>Sign in</button>
            <button className='Header__btn-register'>Register</button>
        </nav>
    </header>
)
