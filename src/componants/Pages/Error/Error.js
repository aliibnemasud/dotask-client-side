import React from 'react';
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div>
            <h1 className='text-5xl text-center'>404</h1>
            <h1 className='text-center'>This Pages is not found</h1>
            <h4>Go To <Link to="/">Home</Link></h4>
        </div>
    );
};

export default Error;