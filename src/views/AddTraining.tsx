import React, {ChangeEvent, FormEvent, useState} from "react";
import {Input} from "../components/Input/Input";
import {InputSelect} from "../components/Input/InputSelect";
import {Button} from "../components/Button/Button";
import {ActivityTypeInterface} from "../types/ActivityTypeInterface";
import {activityDefaultData} from "../utils/activityDefaultData";
import {Spinner} from "../components/Spinner/Spinner";
import {activityTypes} from "../utils/activityTypes";

import './AddTraining.css';

export const AddTraining = () => {
    const [activityData, setActivityData] = useState<ActivityTypeInterface>(activityDefaultData);

    const handleActivityRegistrationForm = (e: FormEvent) => {
        e.preventDefault();
        console.log(activityData);
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

    if (activityData.activityName === null) {
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
                <Input
                    className='AddTraining__input'
                    type="date"
                    name='activityDate'
                    value={activityData.activityDate}
                    label='Activity date:'
                    onChange={handleInputChange}
                />
                <Input
                    className='AddTraining__input'
                    type="time"
                    name='activityStartTime'
                    value={activityData.activityStartTime}
                    label='Activity started at:'
                    onChange={handleInputChange}
                />
                <Input
                    className='AddTraining__input'
                    type="number"
                    name='activityDuration'
                    value={activityData.activityDuration}
                    label='Activity duration [min]:'
                    onChange={handleInputChange}
                />
                <Input
                    className='AddTraining__input'
                    type="number"
                    name='activityDistance'
                    value={activityData.activityDistance}
                    label='Activity distance [km]:'
                    onChange={handleInputChange}
                />
                <Input
                    className='AddTraining__input'
                    type="number"
                    name='activitySpeed'
                    value={activityData.activitySpeed}
                    label='Activity speed [km/h]:'
                    onChange={handleInputChange}
                />
                <Input
                    className='AddTraining__input'
                    type="text"
                    name='activityComment'
                    value={activityData.activityComment}
                    label='Activity comment:'
                    placeholder='Comment...'
                    onChange={handleInputChange}
                />
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
