import { PencilAltIcon, TrashIcon } from '@heroicons/react/solid';
import React from 'react';
import { toast } from 'react-toastify';

const Task = ({task, setEdit, setDeleteTask}) => {
    const {name, _id} = task;

    const handleEdit = id => {
       
    }

    const handleComplete = id => {

        const updateTask = {            
            progress: "Completed",  
        }

        fetch(`https://radiant-lowlands-88709.herokuapp.com/task/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updateTask),
        })
            .then((res) => res.json())
            .then((data) => {
               toast.success("Completed")
            })
        
    }

    return (
        <tr>
            <td>
                <input onChange={()=> handleComplete(_id)} type="checkbox" className="checkbox" />
            </td>
            <td>{name}</td>
            <td></td>
            {/* justify-center justify-items-center */}
            <td className='flex'>               
                <label className='btn btn-ghost' onClick={()=> setEdit(task)}  for="edit-modal"><PencilAltIcon onClick={()=> handleEdit(_id)} className="h-7 w-7" ></PencilAltIcon></label>

                <label className='btn btn-ghost' onClick={()=>setDeleteTask(task)}  for="delete-modal"><TrashIcon className="h-7 w-7"></TrashIcon></label>
                
                
            </td>
        </tr>
    );
};

export default Task;