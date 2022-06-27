import React, {ChangeEvent} from 'react';

interface Props {
    className: string;
    type: string;
    name: string;
    value: string;
    placeholder: string;
    style?: { backgroundColor: string };
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = (props: Props) => (
    <input
        className={props.className}
        type={props.type}
        name={props.name}
        value={props.value}
        placeholder={props.placeholder}
        style={props.style}
        onChange={props.onChange}
    />
)

