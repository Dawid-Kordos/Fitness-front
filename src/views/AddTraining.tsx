import React, {ChangeEvent, FormEvent, useEffect, useState} from "react";
import {Input} from "../components/Input/Input";
import {InputSelect} from "../components/Input/InputSelect";
import {Button} from "../components/Button/Button";
import {ActivityTypeInterface, ActivityTypeEntity} from "types";
import {activityDefaultData} from "../utils/activityDefaultData";
import {Spinner} from "../components/Spinner/Spinner";

import './AddTraining.css';

export const AddTraining = () => {
    const [activityData, setActivityData] = useState<ActivityTypeInterface>(activityDefaultData);
    const [activityTypes, setActivityTypes] = useState<ActivityTypeEntity[] | null>(null);

    const refreshActivityTypes = async () => {
        try {
            setActivityTypes(null);
            const res = await fetch('http://localhost:3001/activity-types');
            setActivityTypes(await res.json());
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        (async () => {
            await refreshActivityTypes();
        })();
    }, []);



    const handleActivityRegistrationForm = (e: FormEvent) => {
        e.preventDefault();
        setActivityData(activityDefaultData);
    };

    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>): void => {
        setActivityData(activityData => ({
            ...activityData,
            [e.target.name]: e.target.value,
        }));
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => (
        setActivityData(activityData => ({
            ...activityData,
            [e.target.name]: e.target.value,
        })));

    if (activityData.activityName === null || activityTypes === null) {
        return <Spinner/>;
    }

    return (
        <div className='AddTraining'>
            <h1 className='AddTraining__header'>You are adding a new training</h1>
            <form className='AddTraining__form' onSubmit={handleActivityRegistrationForm}>
                <InputSelect
                    className='AddTraining__select'
                    name='activityName'
                    activities={activityTypes}
                    onChange={handleSelectChange}
                />
                <label className='AddTraining__label'>Activity date:
                    <Input
                        className='AddTraining__input'
                        type="date"
                        name='activityDate'
                        value={activityData.activityDate}
                        onChange={handleInputChange}
                    />
                </label>
                <label className='AddTraining__label'>Activity started at:
                    <Input
                        className='AddTraining__input'
                        type="time"
                        name='activityStartTime'
                        value={activityData.activityStartTime}
                        onChange={handleInputChange}
                    />
                </label>
                <label className='AddTraining__label'>Activity duration [min]:
                    <Input
                        className='AddTraining__input'
                        type="number"
                        name='activityDuration'
                        value={activityData.activityDuration}
                        onChange={handleInputChange}
                    />
                </label>
                <label className='AddTraining__label'>Activity distance [km]:
                    <Input
                        className='AddTraining__input'
                        type="number"
                        name='activityDistance'
                        value={activityData.activityDistance}
                        onChange={handleInputChange}
                    />
                </label>
                <label className='AddTraining__label'>Activity speed [km/h]:
                    <Input
                        className='AddTraining__input'
                        type="number"
                        name='activitySpeed'
                        value={activityData.activitySpeed}
                        onChange={handleInputChange}
                    />
                </label>
                <label className='AddTraining__label'>Activity comment:
                    <Input
                        className='AddTraining__input'
                        type="text"
                        name='activityComment'
                        value={activityData.activityComment}
                        placeholder='Comment...'
                        onChange={handleInputChange}
                    />
                </label>
                <Button
                    className='AddTraining__btn'
                    text='Add'
                />
                {/*                <Button
                    className='AddTraining__btn'
                    text='Cancel'
                />*/}
            </form>
        </div>
    );
};
