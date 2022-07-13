import React, {useState} from "react";
import {ErrorPage} from "../../views/ErrorPage";

import "./ButtonImg.css";

interface Props {
    img: string;
    alt: string;
    activityId: string | undefined;
}

export const ButtonImg = (props: Props) => {

    const [errorMessage, setErrorMessage] = useState<string>('');

    const handleBtnClick = async () => {
        const activityId = props.activityId;

        try {
            const res = await fetch(`http://localhost:3001/activity-data/${activityId}`, {
                method: "delete",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({activityId}),
            });

            const message = await res.json();

            if (message.message) {
                setErrorMessage(message.message);
            }
        } catch (err) {
            console.error(err);
            return <ErrorPage message={errorMessage}/>
        }
        window.location.reload();
    };

    if (errorMessage) {
        return <ErrorPage message={errorMessage}/>
    }

    return (
        <button className="ButtonIcon__btn-icon" onClick={handleBtnClick}>
            <img
                src={props.img}
                alt={props.alt}
            />
        </button>
    )
}
