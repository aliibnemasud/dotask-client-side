import React, { useEffect, useState } from 'react';
import useTask from '../../Hook/useTask';
import Task from './Task';

const CompletedTask = () => {   

    const [alltask] = useTask();

    const completedTask = alltask.filter(element => element.progress === "Completed");
    
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Status</th>
                            <th>Task Name</th>
                            <th>Task Details</th>
                            <th>Task Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        completedTask.map(task => <Task 
                            task={task}                            
                            key={task._id}
                            ></Task>)
                       }
                    </tbody>
                </table>
            </div>
                        
        </div>
    );
};

export default CompletedTask;