import React from 'react';
import {useNavigate} from "react-router-dom";
import {Button} from "../components/Button/Button";

export const SingleDayTrainingsPreview = () => {
    const navigate = useNavigate();

    const handleAddNewTraining = () => {
        navigate('/trainings/add-form');
    }

    return (
    <>
        <h1>Single day</h1>
        <Button className='Table__btn-add' text='Add new training' onClick={handleAddNewTraining}/>
    </>
    );
};
