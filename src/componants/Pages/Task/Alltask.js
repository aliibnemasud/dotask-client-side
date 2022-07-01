import React, { useEffect, useRef, useState } from 'react';
import { BeakerIcon, TrashIcon } from '@heroicons/react/solid';
import Task from './Task';

const Alltask = () => {   

    const taskNameRef = useRef('');
    const [alltask, setAllTask] = useState([]);

    


    useEffect(()=> {
        fetch("http://localhost:5000/alltask")
        .then(res => res.json())
        .then(data => setAllTask(data))

    },[alltask])



    const handleAddTask = e => {
        e.preventDefault();
        const taskName = taskNameRef.current.value;        
        const task = {
            name: taskName,
            
        }
        fetch('http://localhost:5000/task', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(task)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            
        })

        taskNameRef.current.value = '';
        
    }

    const handleKeypress = e => {    
      if (e.keyCode === 13) {
        handleAddTask()
      }
    };    

    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
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
                        alltask.map(task => <Task task={task} ></Task>)
                       }
                    </tbody>
                </table>
            </div>
            <form onSubmit={handleAddTask}>
                <input onKeyPress={handleKeypress} className='input input-bordered input-accent w-full max-w-xs mt-5 mr-5' ref={taskNameRef} type="text" placeholder='Add your new task' />
                <input className='btn btn-primary'  type="submit" value="Add Task" />                
            </form>
        </div>
    );
};

export default Alltask;