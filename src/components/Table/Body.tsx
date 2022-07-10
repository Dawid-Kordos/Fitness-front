import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {ActualDateContext} from "../App/App";

interface Props {
    days: (string | number)[];
    month: number;
    year: number;
}

export const Body = (props: Props) => {
    const context = useContext(ActualDateContext);

    if (!context) return null;

    const {handleSetActualDate} = context;

    const handleLink = async (day: number | string) => {
        const currentDate = `${props.year}-${props.month < 10 ? '0' + props.month : props.month}-${day < 10 ? '0' + day : day}`;
        handleSetActualDate(currentDate);
    }

    return (
        <>
            <tbody className='Table__body'>
            <tr className="Table__row">
                {props.days.map((day, i) => (i >= 0 && i <= 6) &&
                    <td
                        key={i}
                        {...day === '' ? {className: 'Table__reset'} : {className: "Table__column"}}
                        style={
                            (day === new Date().getDate() && props.month === new Date().getMonth() + 1 && props.year === new Date().getFullYear())
                                ? {backgroundColor: 'orange'}
                                : {backgroundColor: ''}
                        }
                    >
                        {day !== '' &&
                        <Link className='Table__link'
                              to='/trainings/single-day'
/*                              style={{color: 'blue', fontWeight: 'bold'}}*/
                              onClick={() => handleLink(day)}>{day}</Link>}
                    </td>)}
            </tr>
            <tr className="Table__row">
                {props.days.map((day, i) => (i >= 7 && i <= 13) &&
                    <td
                        key={i}
                        className="Table__column"
                        style={(day === new Date().getDate() && props.month === new Date().getMonth() + 1 && props.year === new Date().getFullYear())
                            ? {backgroundColor: 'orange'}
                            : {backgroundColor: ''}
                        }
                    >
                        <Link className='Table__link' to='/trainings/single-day'
                              onClick={() => handleLink(day)}>{day}</Link>
                    </td>)}
            </tr>
            <tr className="Table__row">
                {props.days.map((day, i) => (i >= 14 && i <= 20) &&
                    <td
                        key={i}
                        className="Table__column"
                        style={(day === new Date().getDate() && props.month === new Date().getMonth() + 1 && props.year === new Date().getFullYear())
                            ? {backgroundColor: 'orange'}
                            : {backgroundColor: ''}
                        }
                    >
                        <Link className='Table__link' to='/trainings/single-day'
                              onClick={() => handleLink(day)}>{day}</Link>
                    </td>)}
            </tr>
            <tr className="Table__row">
                {props.days.map((day, i) => (i >= 21 && i <= 27) &&
                    <td
                        key={i}
                        className="Table__column"
                        style={(day === new Date().getDate() && props.month === new Date().getMonth() + 1 && props.year === new Date().getFullYear())
                            ? {backgroundColor: 'orange'}
                            : {backgroundColor: ''}
                        }
                    >
                        <Link className='Table__link' to='/trainings/single-day'
                              onClick={() => handleLink(day)}>{day}</Link>
                    </td>)}
            </tr>
            <tr className="Table__row">
                {props.days.map((day, i) => (i >= 28 && i <= 34) &&
                    <td
                        key={i}
                        className="Table__column"
                        style={(day === new Date().getDate() && props.month === new Date().getMonth() + 1 && props.year === new Date().getFullYear())
                            ? {backgroundColor: 'orange'}
                            : {backgroundColor: ''}
                        }
                    >
                        <Link className='Table__link' to='/trainings/single-day'
                              onClick={() => handleLink(day)}>{day}</Link>
                    </td>)}
            </tr>
            {props.days.length > 35
                ? <tr className="Table__row">
                    {props.days.map((day, i) => (i >= 35 && i <= 41) &&
                        <td
                            key={i}
                            className="Table__column"
                            style={(day === new Date().getDate() && props.month === new Date().getMonth() + 1 && props.year === new Date().getFullYear())
                                ? {backgroundColor: 'orange'}
                                : {backgroundColor: ''}
                            }
                        >
                            <Link className='Table__link' to='/trainings/single-day'
                                  onClick={() => handleLink(day)}>{day}</Link></td>)}
                </tr>
                : null
            }
            </tbody>
        </>
    )
}
