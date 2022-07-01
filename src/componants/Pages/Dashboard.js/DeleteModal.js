import React from 'react';
import { toast } from 'react-toastify';

const DeleteModal = ({ deleteTask }) => {

    const { name, _id } = deleteTask;

    const handComplete = id => {
        console.log(id)
    }


    const handleDelete = id => {
            const url = `http://localhost:5000/task/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    toast.success(`${name} has been deleted.`)
                    console.log(data)
                })
        }

        return (
            <div>
                {/* <!-- The button to open modal --> */}


                {/* <!-- Put this part before </body> tag-- > */}
                <input onChange={()=> handComplete(_id)} value={_id} type="checkbox" id="delete-modal" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                    <label for="delete-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className="modal-box relative">
                        <label for="delete-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                        <h3 className="font-bold text-lg">Are you sure want to delete this task?</h3>

                        <h3 className="text-primary text-lg my-10">{name}</h3>

                        <div >

                            <label onClick={()=> handleDelete(_id)} for="delete-modal" className='btn btn-error mr-5'>Yes</label>

                            <label for="delete-modal" className='btn btn-primary ml-5'>No</label>
                        </div>
                    </div>
                </div>
            </div>

        );
    };

    export default DeleteModal;