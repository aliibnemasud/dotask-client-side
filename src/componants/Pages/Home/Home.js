import React from 'react';
import illustration from '../../Assets/completed_tasks.png';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='max-w-7xl mx-auto my-24'>
           <div className='flex justify-center'>
            <img className='' src={illustration} alt="" />
           </div>
            <h1 className='text-5xl'>Welcome to Do<span className='text-primary font-bold'>Task</span></h1>
            <p className='text-center my-4'>Do your task easily and by tracking</p>
            <Link to="/login"  className='text-center my-10 btn btn-primary'>Get Started</Link>

        </div>
    );
};

export default Home;