import React from "react";
import {Link} from "react-router-dom";

import './ErrorPage.css';
import {Button} from "../components/Button/Button";

interface Props {
    message: string;
}

export const ErrorPage = (props: Props) => {
    const handleButtonClick = () => {
        window.location.reload();
    }

    return (
        <>
            <div className="Error">
                <h2>There is an error:</h2>
                {props.message}
            </div>
            <Button className='Error__btn' text='Try again' onClick={handleButtonClick}/>
        </>
    );
}
