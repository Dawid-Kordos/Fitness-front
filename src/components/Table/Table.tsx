import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {countDaysOfMonth} from "../../utils/countDaysOfMonth";
import {defineFirstDayOfTheMonth} from "../../utils/defineFirstDayOfTheMonth";
import {Button} from "../Button/Button";

import './Table.css';

export const Table = () => {
    const [days, setDays] = useState<(string | number)[]>([]);
    const [month, setMonth] = useState<number>(new Date().getMonth() + 1);
    const [year, setYear] = useState<number>(new Date().getFullYear());
    const [refDate, setRefDate] = useState<string>(`${month}/01/${year}`);
    const [currentMonthName, setCurrentMonthName] = useState<string>(new Date(refDate).toLocaleDateString('en-EN', {month: 'long'}).toUpperCase());
    const [refDayName, setRefDayName] = useState<string>(new Date(refDate).toLocaleDateString('en-EN', {weekday: 'short'}).toUpperCase());

    const navigate = useNavigate();
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
                <thead>
                <tr className="Table__row-head">
                    <th className="Table__column-head">MON</th>
                    <th className="Table__column-head">TUE</th>
                    <th className="Table__column-head">WED</th>
                    <th className="Table__column-head">THU</th>
                    <th className="Table__column-head">FRI</th>
                    <th className="Table__column-head">SAT</th>
                    <th className="Table__column-head">SUN</th>
                </tr>
                </thead>
                <tbody className='Table__body'>
                <tr className="Table__row">
                    {days.map((day, i) => (i >= 0 && i <= 6) &&
                        <td
                            key={i}
                            {...day === '' ? {className: 'Table__reset'} : {className: "Table__column"}}
                            style={
                                (day === new Date().getDate() && month === new Date().getMonth() + 1 && year === new Date().getFullYear())
                                    ? {backgroundColor: 'orange'}
                                    : {backgroundColor: ''}
                            }
                        >
                            {day !== '' && <Link className='Table__link' to='/trainings/single-day'>{day}</Link>}
                        </td>)}
                </tr>
                <tr className="Table__row">
                    {days.map((day, i) => (i >= 7 && i <= 13) &&
                        <td
                            key={i}
                            className="Table__column"
                            style={(day === new Date().getDate() && month === new Date().getMonth() + 1 && year === new Date().getFullYear())
                                ? {backgroundColor: 'orange'}
                                : {backgroundColor: ''}
                            }
                        >
                            <Link className='Table__link' to='/trainings/single-day'>{day}</Link>
                        </td>)}
                </tr>
                <tr className="Table__row">
                    {days.map((day, i) => (i >= 14 && i <= 20) &&
                        <td
                            key={i}
                            className="Table__column"
                            style={(day === new Date().getDate() && month === new Date().getMonth() + 1 && year === new Date().getFullYear())
                                ? {backgroundColor: 'orange'}
                                : {backgroundColor: ''}
                            }
                        >
                            <Link className='Table__link' to='/trainings/single-day'>{day}</Link>
                        </td>)}
                </tr>
                <tr className="Table__row">
                    {days.map((day, i) => (i >= 21 && i <= 27) &&
                        <td
                            key={i}
                            className="Table__column"
                            style={(day === new Date().getDate() && month === new Date().getMonth() + 1 && year === new Date().getFullYear())
                                ? {backgroundColor: 'orange'}
                                : {backgroundColor: ''}
                            }
                        >
                            <Link className='Table__link' to='/trainings/single-day'>{day}</Link>
                        </td>)}
                </tr>
                <tr className="Table__row">
                    {days.map((day, i) => (i >= 28 && i <= 34) &&
                        <td
                            key={i}
                            className="Table__column"
                            style={(day === new Date().getDate() && month === new Date().getMonth() + 1 && year === new Date().getFullYear())
                                ? {backgroundColor: 'orange'}
                                : {backgroundColor: ''}
                            }
                        >
                            <Link className='Table__link' to='/trainings/single-day'>{day}</Link>
                        </td>)}
                </tr>
                {days.length > 35
                    ? <tr className="Table__row">
                        {days.map((day, i) => (i >= 35 && i <= 41) &&
                            <td
                                key={i}
                                className="Table__column"
                                style={(day === new Date().getDate() && month === new Date().getMonth() + 1 && year === new Date().getFullYear())
                                    ? {backgroundColor: 'orange'}
                                    : {backgroundColor: ''}
                                }
                            >
                                <Link className='Table__link'
                                      to='/trainings/single-day'>{day}</Link></td>)}
                    </tr>
                    : null
                }
                </tbody>
            </table>
            <Button className='Table__btn-add' text='Add new training' onClick={handleAddNewTraining}/>
         </>
    );
};
