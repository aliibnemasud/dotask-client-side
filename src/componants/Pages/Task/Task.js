import { PencilAltIcon, TrashIcon } from '@heroicons/react/solid';
import React from 'react';

const Task = ({task, setEdit, setDeleteTask}) => {
    const {name, _id} = task;

    const handleEdit = id => {
        console.log(id)
    }

    return (
        <tr>
            <td>
                <input type="checkbox" class="checkbox" />
            </td>
            <td>{name}</td>
            <td></td>
            <td className='flex'>               
                <label onClick={()=> setEdit(task)}  for="edit-modal"><PencilAltIcon onClick={()=> handleEdit(_id)} className="h-5 w-5" ></PencilAltIcon></label>

                <label onClick={()=> setDeleteTask(task)}  for="delete-modal"><TrashIcon className="h-5 w-5" ></TrashIcon></label>
                
                
            </td>
        </tr>
    );
};

export default Task;