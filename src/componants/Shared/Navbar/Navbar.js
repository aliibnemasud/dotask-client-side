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

  const [user] = useAuthState(auth);

  
  return (
    <nav>
      <div className="navbar bg-base-100 ">

        <div className='navbar max-w-7xl mx-auto'>

          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex="0" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                {menu}
              </ul>
            </div>
            <a className="btn btn-ghost normal-case text-xl">DoTask</a>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
              {menu}
            </ul>
          </div>
          <div className="navbar-end">
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