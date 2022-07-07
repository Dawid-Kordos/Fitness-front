import React from "react";

import './Table.css';

export const Head = () => {
    return (
        <>
            <thead>
            <tr className="Table__row-head">
                <th className="Table__column-head">MON</th>
                <th className="Table__column-head">TUE</th>
                <th className="Table__column-head">WED</th>
                <th className="Table__column-head">THU</th>
                <th className="Table__column-head">FRI</th>
                <th className="Table__column-head">SAT</th>
                <th className="Table__column-head">SUN</th>
            </tr>
            </thead>
        </>

    );
};
