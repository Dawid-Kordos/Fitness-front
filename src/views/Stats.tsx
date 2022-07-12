import React, {useEffect, useState} from "react";
import Cookies from 'universal-cookie';
import {ActivityRegistrationEntity} from "types";
import {Spinner} from "../components/Spinner/Spinner";

import "./Stats.css";
import {ButtonImg} from "../components/Button/ButtonImg";
import trash from "../graphics/trash.png";
import edit from "../graphics/edit.png";

export const Stats = () => {
    const cookies = new Cookies();

    const [userActivities, setUserActivities] = useState<ActivityRegistrationEntity[] | null>(null);

    const refreshActivities = async () => {
        const userId = cookies.get('userId');

        try {
            setUserActivities(null);
            const res = await fetch(`http://localhost:3001/activity-data/${userId}`);
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

    return (
        <>
            <div className='Stats__container'>
                <h1 className='Stats__header'>Total activity
                    time: {userActivities.reduce((prev, curr) => prev + curr.activityDuration, 0)} min
                </h1>
                <h1 className='Stats__header'>List of all activities:</h1>
                <ul className='Stats__list'>
                    {userActivities.map(activity => (
                        <div className='Stats__wrapper'>
                            <li key={activity.id}
                                className='Stats__item'> {activity.activityDate}: {activity.activityName} - {activity.activityDuration} min
                            </li>
                            <ButtonImg img={trash} alt='trash'/>
                            <ButtonImg img={edit} alt='edit'/>
                        </div>
                    ))}
                </ul>
            </div>
        </>
    );
}
