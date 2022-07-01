import React, { useRef } from 'react';

const EditModal = ({ edit }) => {
    const { name, _id } = edit;

    const nameRef = useRef('');
    const selectRef = useRef('');

    const handleUpdate = () => {

        const name = nameRef.current.value;
        const select = selectRef.current.value;
        console.log(name)

        const updateTask = {
            name: name,
            progress: select,  
        }

        fetch(`https://radiant-lowlands-88709.herokuapp.com/task/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updateTask),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
            })
    }

    return (
        <div>
            {/* <!-- The button to open modal --> */}


            {/* <!-- Put this part before </body> tag-- > */}
            <input type="checkbox" id="edit-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
            
                <div class="modal-box">

                    <h3 class="font-bold text-lg">Update Task</h3>
                    <input defaultValue={name} ref={nameRef} class="input w-full max-w-xs my-3 input-bordered" /> <br />
                    <select class="select w-full max-w-xs" ref={selectRef}>                        
                        <option>Completed</option>
                        <option selected>In Progress</option>
                        <option>New</option>                        
                    </select>

                    <label onClick={handleUpdate} for="edit-modal" className='btn btn-primary w-full max-w-xs'>Save</label>
                </div>
            </div>
        </div>

    );
};

export default EditModal;