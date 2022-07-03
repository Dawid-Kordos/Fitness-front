import React, {ChangeEvent} from 'react';

import './Input.css';

interface Props {
    className: string;
    type: string;
    name: string;
    value: number | string | undefined;
    placeholder?: string;
    style?: { backgroundColor: string };
    label?: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = (props: Props) => (
    <label className='Input__label'>{props.label}
        <input
            id='1'
            className={props.className}
            type={props.type}
            name={props.name}
            value={props.value}
            placeholder={props.placeholder}
            style={props.style}
            onChange={props.onChange}
        />
    </label>
)

