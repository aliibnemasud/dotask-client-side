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
                <input type="checkbox" className="checkbox" />
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