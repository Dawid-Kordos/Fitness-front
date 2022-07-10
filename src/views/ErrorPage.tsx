import React from "react";
import {Link} from "react-router-dom";

import './ErrorPage.css';

interface Props {
    message: string;
}

export const ErrorPage = (props: Props) => (
    <>
        <div className="Error">
            <h2>There is an error:</h2>
            {props.message}
        </div>
        <Link to='/' className="Error__link">Go to main page</Link>
    </>
);
