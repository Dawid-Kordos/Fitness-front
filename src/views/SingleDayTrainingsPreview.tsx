import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import Cookies from "universal-cookie";
import {ActivityRegistrationEntity} from "types";
import {Button} from "../components/Button/Button";
import {Spinner} from "../components/Spinner/Spinner";

import "./SingleDayTrainingsPreview.css";
import {ErrorPage} from "./ErrorPage";

interface Props {
    actualDate: string;
}

export const SingleDayTrainingsPreview = (props: Props) => {
    const navigate = useNavigate();
    const cookies = new Cookies();

    const [userActivities, setUserActivities] = useState<ActivityRegistrationEntity[] | null>(null);

    const refreshActivities = async () => {
        const userId = cookies.get('userId');
        try {
            setUserActivities(null);
            const res = await fetch(`http://localhost:3001/activity-data/${userId}/${props.actualDate}`);
            setUserActivities(await res.json());
        } catch (err) {
            console.error(err);
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
                        <li key={activity.id}
                            className='Stats__item'> {activity.activityDate}: {activity.activityName} - {activity.activityDuration} min</li>
                    ))}
                </ul>
            </div>

            <Button className='Table__btn-add' text='Add new training' onClick={handleAddNewTraining}/>
        </>
    );
};
