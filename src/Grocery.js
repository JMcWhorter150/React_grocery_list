import React, { useLayoutEffect } from 'react';

function Grocery({thing1, thing2, thing3}) {

    return (
        <ul>
            <li>{thing1}</li>
            <li>{thing2}</li>
            <li>{thing3}</li>
        </ul>
    );
}

export default Grocery;