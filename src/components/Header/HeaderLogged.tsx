import React from 'react';
import {Link} from "react-router-dom";
import './Header.css';

const user = 'Dawid';

export const HeaderLogged = () => (
    <header className='Header'>
        <nav className='Header__nav'>
            <span className="material-symbols-outlined">
                directions_run
            </span>
            <Link className='Header__link-logo' to='/'>Fitness</Link>
            <div className='Header-options'>
                <Link className='Header__link-option' to='/trainings'>Trainings</Link>
                <Link className='Header__link-option' to='/stats'>Statistics</Link>
                <span className='Header__user'>{user}</span>
            </div>
            <button className='Header__btn-sign-out'>Log out</button>
        </nav>
    </header>
)
