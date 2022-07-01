import React, { useRef } from 'react';

const EditModal = ({ edit }) => {
    const { name, _id, progress } = edit;

    const nameRef = useRef('');
    const selectRef = useRef('');

    const handleUpdate = () => {

        const name = nameRef.current.value;
        const select = selectRef.current.value;
        

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
                
            })
    }

    return (
        <div>
            {/* <!-- The button to open modal --> */}


            {/* <!-- Put this part before </body> tag-- > */}
            <input type="checkbox" id="edit-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
            
                <div className="modal-box">
                <label for="edit-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <h3 className="font-bold text-lg mb-5">UPDATE TASK</h3>
                    <input defaultValue={name} ref={nameRef} className="input w-full max-w-xs input-bordered" /> <br />

                    <select defaultValue={progress} className="select w-full max-w-xs input-bordered my-5" ref={selectRef}>                        
                        <option>Completed</option>
                        <option>In Progress</option>
                        <option>New</option>                        
                    </select>

                    <label onClick={handleUpdate} for="edit-modal" className='btn btn-primary w-full max-w-xs'>Save</label>
                </div>
            </div>
        </div>

    );
};

export default EditModal;