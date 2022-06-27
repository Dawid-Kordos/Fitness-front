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
            <Link className='Header__btn-sign-in' to='/sign-in'>Sign in</Link>
            <Link className='Header__btn-register' to='/register'>Register</Link>
        </nav>
    </header>
)
