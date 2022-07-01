import React, {useEffect, useState} from "react";
import {countDaysOfMonth} from "../../utils/countDaysOfMonth";

import './Table.css';
import {defineFirstDayOfTheMonth} from "../../utils/defineFirstDayOfTheMonth";

export const Table = () => {
    const [days, setDays] = useState<(string | number)[]>([]);
    const [month, setMonth] = useState<number>(new Date().getMonth() + 1);
    const [year, setYear] = useState<number>(new Date().getFullYear());
    const [refDate, setRefDate] = useState<string>(`${month}/01/${year}`);
    const [currentMonthName, setCurrentMonthName] = useState<string>(new Date(refDate).toLocaleDateString('en-EN', {month: 'long'}).toUpperCase());
    const [refDayName, setRefDayName] = useState<string>(new Date(refDate).toLocaleDateString('en-EN', {weekday: 'short'}).toUpperCase());
    //const weekday = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'][new Date().getDay() - 1];

    //aktualny dzień wyróżnić
    //ciasteczka do sesji

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
    }

    const handlePrevClick = () => {
        if (month <= 1) {
            setMonth(12);
            setYear(year - 1);
        } else {
            setMonth(month - 1);
        }
    }

    const handleNextClick = () => {
        if (month >= 12) {
            setMonth(1);
            setYear(year + 1);
        } else {
            setMonth(month + 1);
        }
    }

    return (
        <>
            <div className='Table__navigation'>
                <button className='Table__btn' onClick={handlePrevClick}>Prev month</button>
                <h1 className='Table__current-date'>{currentMonthName} {year}</h1>
                <button className='Table__btn' onClick={handleNextClick}>Next month</button>
            </div>
            <table className="Table">
                <thead>
                <tr className="Table__row">
                    <th className="Table__column-head">MON</th>
                    <th className="Table__column-head">TUE</th>
                    <th className="Table__column-head">WED</th>
                    <th className="Table__column-head">THU</th>
                    <th className="Table__column-head">FRI</th>
                    <th className="Table__column-head">SAT</th>
                    <th className="Table__column-head">SUN</th>
                </tr>
                </thead>
                <tbody>
                <tr className="Table__row">
                    <td className="Table__column">{days[0]}</td>
                    <td className="Table__column">{days[1]}</td>
                    <td className="Table__column">{days[2]}</td>
                    <td className="Table__column">{days[3]}</td>
                    <td className="Table__column">{days[4]}</td>
                    <td className="Table__column">{days[5]}</td>
                    <td className="Table__column">{days[6]}</td>
                </tr>
                <tr className="Table__row">
                    <td className="Table__column">{days[7]}</td>
                    <td className="Table__column">{days[8]}</td>
                    <td className="Table__column">{days[9]}</td>
                    <td className="Table__column">{days[10]}</td>
                    <td className="Table__column">{days[11]}</td>
                    <td className="Table__column">{days[12]}</td>
                    <td className="Table__column">{days[13]}</td>
                </tr>
                <tr className="Table__row">
                    <td className="Table__column">{days[14]}</td>
                    <td className="Table__column">{days[15]}</td>
                    <td className="Table__column">{days[16]}</td>
                    <td className="Table__column">{days[17]}</td>
                    <td className="Table__column">{days[18]}</td>
                    <td className="Table__column">{days[19]}</td>
                    <td className="Table__column">{days[20]}</td>
                </tr>
                <tr className="Table__row">
                    <td className="Table__column">{days[21]}</td>
                    <td className="Table__column">{days[22]}</td>
                    <td className="Table__column">{days[23]}</td>
                    <td className="Table__column">{days[24]}</td>
                    <td className="Table__column">{days[25]}</td>
                    <td className="Table__column">{days[26]}</td>
                    <td className="Table__column">{days[27]}</td>
                </tr>
                <tr className="Table__row">
                    <td className="Table__column">{days[28]}</td>
                    <td className="Table__column">{days[29]}</td>
                    <td className="Table__column">{days[30]}</td>
                    <td className="Table__column">{days[31]}</td>
                    <td className="Table__column">{days[32]}</td>
                    <td className="Table__column">{days[33]}</td>
                    <td className="Table__column">{days[34]}</td>
                </tr>
                {days.length > 35 ?
                    <tr className="Table__row">
                        <td className="Table__column">{days[35]}</td>
                        <td className="Table__column">{days[36]}</td>
                        <td className="Table__column">{days[37]}</td>
                        <td className="Table__column">{days[38]}</td>
                        <td className="Table__column">{days[39]}</td>
                        <td className="Table__column">{days[40]}</td>
                        <td className="Table__column">{days[41]}</td>
                    </tr>
                    : null
                }
                </tbody>
            </table>
        </>
    );
};
