import React from 'react';
import {Link} from "react-router-dom";

export const HeaderWelcome = () => (
    <header>
        <nav>
            <span className="material-symbols-outlined">
                directions_run
                <Link to='/'>Fitness</Link>
            </span>
            <button>Sign in</button>
            <button>Register</button>
        </nav>
    </header>
)
