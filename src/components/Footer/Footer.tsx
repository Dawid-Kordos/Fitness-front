import React from "react";

import './Footer.css';

export const Footer = () => (
    <footer className="Footer">
        <section className="Footer__section">
            <ul className="Footer__list">
                <li className="Footer__item">All rights reserved!</li>
                <li className="Footer__item">MegaK <p>2021 / 2022</p></li>
                <li className="Footer__item">Author: <p>Dawid Kordos</p></li>
                <li className="Footer__item">Contact:
                    <p>
                        <a className="Footer__link"
                           href="https://facebook.com">
                            <i className="fab fa-facebook-f"/>
                        </a>
                    </p>
                </li>
            </ul>
        </section>
    </footer>
);
