import React from 'react';

interface Props {
    className: string;
    text: string;
}

export const Button = (props: Props) => (
    <button
        className={props.className}
        /*type={props.type}*/
        type='submit'
    >{props.text}
    </button>
)
