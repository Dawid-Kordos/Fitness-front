import React from "react";

import "./ButtonImg.css";

interface Props {
    img: string;
    alt: string;
}

export const ButtonImg = (props: Props) => (
    <button className="ButtonIcon__btn-icon">
        <img
            src={props.img}
            alt={props.alt}
        />
    </button>
)
