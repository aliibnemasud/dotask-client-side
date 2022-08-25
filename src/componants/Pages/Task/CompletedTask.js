import React, { useEffect, useState } from 'react';
import Task from './Task';
import EditModal from '../Dashboard/EditModal';
import DeleteModal from '../Dashboard/DeleteModal';
import { useSelector, useDispatch } from 'react-redux';
import { featchAllTask } from '../../../Features/Alltask/allTaskSlice';

const CompletedTask = () => {

    const [edit, setEdit] = useState(null);
    const [deleteTask, setDeleteTask] = useState(null);

    // Using redux to load data

    const { tasks: alltask } = useSelector(state => state.tasks);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(featchAllTask())
    }, [])

    const completedTask = alltask.filter(element => element.progress === "Completed");

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
                            completedTask.map(task => <Task
                                task={task}
                                setEdit={setEdit}
                                setDeleteTask={setDeleteTask}
                                key={task._id}
                            ></Task>)
                        }
                    </tbody>
                </table>

                {
                    edit && <EditModal edit={edit} ></EditModal>
                }

                {
                    deleteTask && <DeleteModal deleteTask={deleteTask} ></DeleteModal>
                }

            </div>




            {/* <div className="overflow-x-auto">
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
            </div> */}

        </div>
    );
};

export default CompletedTask;