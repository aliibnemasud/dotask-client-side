import React from 'react';
import auth from '../../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);


    return (
        <div className='mb-10'>
            <div className="divider w-full max-w-xs mx-auto">OR</div>            
            <button onClick={()=> signInWithGoogle() } className='btn w-full max-w-xs' >Google Login</button>
        </div>
    );
};

export default SocialLogin;