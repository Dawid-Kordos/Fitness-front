import React from 'react';

interface Props {
    className: string;
    text: string;
    onClick?: () => void;
}

export const Button = (props: Props) => (
    <button
        className={props.className}
        type='submit'
        onClick={props.onClick}
    >{props.text}
    </button>
);

