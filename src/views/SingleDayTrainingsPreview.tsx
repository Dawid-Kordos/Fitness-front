import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import Cookies from "universal-cookie";
import {ActivityRegistrationEntity} from "types";
import {Button} from "../components/Button/Button";
import {Spinner} from "../components/Spinner/Spinner";
import {ErrorPage} from "./ErrorPage";
import {ButtonImg} from "../components/Button/ButtonImg";

import "./SingleDayTrainingsPreview.css";
import trash from '../graphics/trash.png';
/*import edit from '../graphics/edit.png';*/

interface Props {
    actualDate: string;
}

export const SingleDayTrainingsPreview = (props: Props) => {
    const navigate = useNavigate();
    const cookies = new Cookies();

    const [userActivities, setUserActivities] = useState<ActivityRegistrationEntity[] | null>(null);
    const [errorMessage, setErrorMessage] = useState<string>('');

    const refreshActivities = async () => {
        const userId = cookies.get('userId');
        try {
            setUserActivities(null);
            const res = await fetch(`http://localhost:3001/activity-data/${userId}/${props.actualDate}`);
            const message = await res.json();
            setUserActivities(message);
            message.message && setErrorMessage(message.message);
        } catch (err) {
            console.error(err);
            return <ErrorPage message={errorMessage}/>
        }
    };

    useEffect(() => {
        (async () => {
            await refreshActivities();
        })();
    }, []);

    if (!userActivities) {
        return <Spinner/>
    }

    const handleAddNewTraining = () => {
        navigate('/trainings/add-form');
    }

    if (errorMessage) {
        return <ErrorPage message={errorMessage}/>
    }

    return (
        <>
            <div className='SingleDayTrainingsPreview__container'>
                <h1 className='SingleDayTrainingsPreview__header'>{props.actualDate}</h1>
                <h2 className='SingleDayTrainingsPreview__header'>Total activity
                    time: {userActivities.reduce((prev, curr) => prev + curr.activityDuration, 0)} min
                </h2>
                <h2 className='SingleDayTrainingsPreview__header'>List of activities:</h2>
                <ul className='SingleDayTrainingsPreview__list'>
                    {userActivities.map(activity => (
                        <div key={activity.id} className='SingleDayTrainingsPreview__wrapper'>
                            <li
                                className='SingleDayTrainingsPreview__item'> {activity.activityDate}: {activity.activityName} - {activity.activityDuration} min
                            </li>
                            <ButtonImg img={trash} alt='trash' activityId={activity.id}/>
                            {/*<ButtonImg img={edit} alt='edit'  activityId={activity.id}/>*/}
                        </div>
                    ))}
                </ul>
            </div>

            <Button className='Table__btn-add' text='Add new training' onClick={handleAddNewTraining}/>
        </>
    );
};
