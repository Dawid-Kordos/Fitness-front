import React from 'react';
import {Link} from "react-router-dom";
import {Main} from "../../views/Main";

import './Header.css';

const user = 'Dawid';

interface Props {
    loginStatus: (status: boolean) => void;
}

export const HeaderLogged = (props: Props) => {
    const handleClick = () => {
        props.loginStatus(false);
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
                    <span className='Header__user'>{user}</span>
                </div>
                <Link to='/'>
                    <button className='Header__btn-sign-out' onClick={handleClick}>Log out</button>
                </Link>
            </nav>
        </header>
    )
}
