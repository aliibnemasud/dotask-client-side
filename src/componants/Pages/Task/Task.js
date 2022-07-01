import { TrashIcon } from '@heroicons/react/solid';
import React from 'react';

const Task = ({task}) => {
    const {name} = task;
    return (
        <tr>
            <td>
                <input type="checkbox" class="checkbox" />
            </td>
            <td>{name}</td>
            <td></td>
            <td>
                <TrashIcon className="h-5 w-5" ></TrashIcon>
            </td>
        </tr>
    );
};

export default Task;