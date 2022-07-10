import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {countDaysOfMonth} from "../../utils/countDaysOfMonth";
import {defineFirstDayOfTheMonth} from "../../utils/defineFirstDayOfTheMonth";
import {Button} from "../Button/Button";
import {Head} from "./Head";
import {Body} from "./Body";

import './Table.css';

export const Table = () => {
    const navigate = useNavigate();
    const [days, setDays] = useState<(string | number)[]>([]); //amount of days in a month
    const [month, setMonth] = useState<number>(new Date().getMonth() + 1);
    const [year, setYear] = useState<number>(new Date().getFullYear());
    const [refDate, setRefDate] = useState<string>(`${month}/01/${year}`);
    const [currentMonthName, setCurrentMonthName] = useState<string>(new Date(refDate).toLocaleDateString('en-EN', {month: 'long'}).toUpperCase());
    const [refDayName, setRefDayName] = useState<string>(new Date(refDate).toLocaleDateString('en-EN', {weekday: 'short'}).toUpperCase());
    //const weekday = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'][new Date().getDay() - 1];

    useEffect(() => {
        buildFitnessTable();
    }, [refDayName, month]);

    useEffect(() => {
        setRefDate(`${month}/01/${year}`);
    }, [month]);

    useEffect(() => {
        setRefDayName(new Date(refDate).toLocaleDateString('en-EN', {weekday: 'short'}).toUpperCase());
        setCurrentMonthName(new Date(refDate).toLocaleDateString('en-EN', {month: 'long'}).toUpperCase());
    }, [refDate]);


    const buildFitnessTable = () => {
        let daysArr: (number | string)[] = [];

        countDaysOfMonth(month, year, daysArr);
        defineFirstDayOfTheMonth(refDayName, daysArr);
        setDays(daysArr);
    };

    const handlePrevMonthClick = () => {
        if (month <= 1) {
            setMonth(12);
            setYear(year - 1);
        } else {
            setMonth(month - 1);
        }
    };

    const handleNextMonthClick = () => {
        if (month >= 12) {
            setMonth(1);
            setYear(year + 1);
        } else {
            setMonth(month + 1);
        }
    };

    const handleAddNewTraining = () => {
        navigate('/trainings/add-form');
    };

    return (
        <>
            <div className='Table__navigation'>
                <button className='Table__btn' onClick={handlePrevMonthClick}>{`<<<`}</button>
                <h1 className='Table__current-date'>{currentMonthName} {year}</h1>
                <button className='Table__btn' onClick={handleNextMonthClick}>{`>>>`}</button>
            </div>
            <table className="Table">
                <Head/>
                <Body days={days} month={month} year={year}/>
            </table>
            <Button className='Table__btn-add' text='Add new training' onClick={handleAddNewTraining}/>
        </>
    );
};
