import React from 'react';

const DeleteModal = ({DeleteModal}) => {

    const {name, _id} = DeleteModal;


    const handleDelete = () => {

    }

    return (
        <div>
            {/* <!-- The button to open modal --> */}


            {/* <!-- Put this part before </body> tag-- > */}
            <input type="checkbox" id="delete-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                 <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <div class="modal-box">

                    <h3 class="font-bold text-lg">Are you sure want to delete this task?</h3>
                    <h3 class="font-bold text-lg">{name}</h3> 
                    <p>Id: {_id}</p>           
                    

                    <label onClick={handleDelete} for="delete-modal" className='btn btn-primary w-full max-w-xs'>Yes</label>
                </div>
            </div>
        </div>

    );
};

export default DeleteModal;