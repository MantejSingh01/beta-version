import React from 'react';
import { useRouteError } from 'react-router-dom';
const Error = () => {
    const error = useRouteError();
    console.log(error)
    return (
        <div>
            oops!!! error {error.data}
        </div>
    );
};

export default Error;