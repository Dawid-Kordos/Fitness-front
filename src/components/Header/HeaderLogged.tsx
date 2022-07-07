import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import Cookies from 'universal-cookie';

import './Header.css';

interface Props {
    userName: string;
}

export const HeaderLogged = (props: Props) => {
    const navigate = useNavigate();
    const cookies = new Cookies();

    const handleClick = () => {
        cookies.remove('isLogged');
        cookies.remove('userName');
        navigate('/');
        window.location.reload();
    }

    return (
        <header className='Header'>
            <nav className='Header__nav'>
            <span className="material-symbols-outlined">
                directions_run
            </span>
                <Link className='Header__link-logo' to='/'>Fitness</Link>
                <div className='Header-options'>
                    <Link className='Header__link-option' to='/trainings'>Trainings</Link>
                    <Link className='Header__link-option' to='/stats'>Statistics</Link>
                     <span className='Header__user'>{props.userName}</span>
                </div>
                <Link to='/'>
                    <button className='Header__btn-sign-out' onClick={handleClick}>Log out</button>
                </Link>
            </nav>
        </header>
    )
}
