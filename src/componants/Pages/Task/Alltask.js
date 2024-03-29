import React, { useEffect, useRef, useState } from 'react';
import EditModal from '../Dashboard/EditModal';
import Task from './Task';
import DeleteModal from '../Dashboard/DeleteModal';
import { useSelector, useDispatch } from 'react-redux';
import { featchAllTask } from '../../../Features/Alltask/allTaskSlice';

const Alltask = () => {

    const { tasks: alltask } = useSelector(state => state.tasks);
    const dispatch = useDispatch();   


    const taskNameRef = useRef('');
  
    const [edit, setEdit] = useState(null);
    const [deleteTask, setDeleteTask] = useState(null);
  
    useEffect(()=> {
        dispatch(featchAllTask())
    }, [alltask])

    const otherTask = alltask.filter(element => element.progress === "New" || element.progress == "In Progress");

    const handleAddTask = e => {
        e.preventDefault();
        const taskName = taskNameRef.current.value;
        const task = {
            name: taskName,
            progress: "New",
        }
        fetch('https://radiant-lowlands-88709.herokuapp.com/task', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(task)
        })
            .then(res => res.json())
            .then(data => {

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
        
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Status</th>
                            <th>Task Name</th>
                            <th>Progress</th>
                            <th>Task Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            otherTask.map(task => <Task
                                task={task}
                                setEdit={setEdit}
                                setDeleteTask={setDeleteTask}
                                key={task._id}
                            ></Task>)
                        }
                    </tbody>
                </table>
            </div>
            <form onSubmit={handleAddTask}>
                <input onKeyPress={handleKeypress} className='input input-bordered input-accent w-full max-w-xs mt-5 mr-5' ref={taskNameRef} type="text" placeholder='Add your new task' required />
                <input className='btn btn-primary' type="submit" value="Add Task" />
            </form>

            { edit && <EditModal edit={edit} ></EditModal> }
            { deleteTask && <DeleteModal deleteTask={deleteTask} ></DeleteModal> }

        </div>
    );
};

export default Alltask;