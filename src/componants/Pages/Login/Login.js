import React, { useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from './SocialLogin';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const [signInWithEmailAndPassword,] = useSignInWithEmailAndPassword(auth);

    const handleLogin = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
       
    }
    return (
        <div className='text-center'>
            <h1 className='text-4xl text-center my-10 font-bold'>Welcome To DoTask</h1>
            <form action="" onSubmit={handleLogin} >
                <input ref={emailRef} type="email" placeholder="Email" className="input w-full max-w-xs mt-3 input-bordered" />
               <br /> <input ref={passwordRef} type="password" placeholder="Password" className="input w-full max-w-xs my-3 input-bordered" /> <br />
                <input className='btn btn-primary w-full max-w-xs' type="submit" value="Login"/>
            </form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;