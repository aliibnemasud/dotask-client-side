import React from 'react';
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div>
            
            <div className="drawer drawer-mobile max-w-7xl mx-auto">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col mt-10">
                    {/* <!-- Page content here --> */}

                    <Outlet></Outlet>
                    


                    <label for="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label for="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content mt-6">
                        {/* <!-- Sidebar content here --> */}
                        <li> <Link to="task">My Task</Link> </li>
                        <li> <Link to="completedtask">Completed Task</Link> </li>
                        
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;