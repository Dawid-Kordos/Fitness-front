import React from "react";

import sport_main from "../graphics/sport-main.jpg";
import './Main.css';

export const Main = () => (
    <main className='Main'>
        <div className='Main__graphic'>
            <img className='Main__img' src={sport_main} alt="sport main page"/>
        </div>
{/*        <span>
            Be better version of yourself today than you were yesterday
        </span>*/}
    </main>
)
