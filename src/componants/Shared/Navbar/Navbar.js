import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { Link } from "react-router-dom";
import auth from '../../../firebase.init';

const Navbar = () => {
  const menu = <>
    <li><Link to="/completedtask">Completed Task</Link> </li>
    <li><Link to="/task">All Task</Link> </li>
    <li><Link to="/calender"> Calender </Link> </li>    
    <li><Link to="/dashboard"> Dashboard </Link> </li>    
  </>

  const [user, loading, error] = useAuthState(auth);

  
  return (
    <nav>
      <div class="navbar bg-base-100 ">

        <div className='navbar max-w-7xl mx-auto'>

          <div class="navbar-start">
            <div class="dropdown">
              <label tabindex="0" class="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                {menu}
              </ul>
            </div>
            <a class="btn btn-ghost normal-case text-xl">DoTask</a>
          </div>

          <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal p-0">
              {menu}
            </ul>
          </div>
          <div class="navbar-end">
            {
              user?.uid ? <button className='btn'  onClick={()=> signOut(auth)} >Sign Out</button> : <Link className='btn'  to="/login">Get started</Link>
            }
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;