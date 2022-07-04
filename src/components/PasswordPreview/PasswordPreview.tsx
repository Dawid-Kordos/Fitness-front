import React, {ChangeEvent, useState} from "react";
import {Input} from "../Input/Input";

import './PasswordPreview.css';

interface Props {
    className: string;
    name: string;
    value: string | undefined;
    placeholder: string;
    style?: { color: string };
    onChange: (e: ChangeEvent<HTMLInputElement>, value: string) => void;
}

export const PasswordPreview = (props: Props) => {
    const [inputType, setInputType] = useState('password');

    const showPassword = () => setInputType('text');

    const hidePassword = () => setInputType('password');

    return(
        <div className='PasswordPreview__form'>
            <Input
                className={props.className}
                type={inputType}
                name={props.name}
                value={props.value}
                placeholder={props.placeholder}
                onChange={e => props.onChange(e, e.target.value)}
            />
            <button
                className='PasswordPreview__btn'
                type='button'
                onMouseDown={showPassword}
                onMouseUp={hidePassword}
            >
                👁‍
            </button>
        </div>
    )
}
