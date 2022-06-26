import React from 'react';
import {Link} from "react-router-dom";

const user = 'Dawid';

export const HeaderLogged = () => (
    <header>
        <nav>
            <span className="material-symbols-outlined">
                directions_run
                <Link to='/'>Fitness</Link>
            </span>
            <Link to='/trainings'>Trainings</Link>
            <Link to='/stats'>Statistics</Link>
            <span>{user}</span>
            <button>Logout</button>
        </nav>
    </header>
)
