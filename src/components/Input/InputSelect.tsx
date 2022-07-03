import React, {ChangeEvent} from "react";
import {ActivityTypeEntity} from "../../types/ActivityTypeEntity";

import './InputSelect.css';

interface Props {
    activities: ActivityTypeEntity[] | null;
    name: string;
    className: string;
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export const InputSelect = (props: Props) => {
    if (!props.activities) return null;

    return (
        <select className={props.className} name={props.name} onChange={(e) => props.onChange(e)}>
            <option
                className='InputSelect__option'
            >
                Choose an activity
            </option>
            {[...props.activities].map(activity => (
                <option
                    key={activity.id}
                    className="InputSelect__option"
                    value={activity.name}
                >
                    {activity.name}
                </option>
            ))}
        </select>
    );
};
