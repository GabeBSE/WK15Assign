


import React, { useState } from 'react';

const UpdateForm = ({ onUpdate, onCancel }) => {
  const [newBreed, setNewBreed] = useState('');

  const handleUpdate = () => {  
    onUpdate(newBreed);
    setNewBreed('');
  };

  return (  /* this will display the update form and buttons on the browswer */
    <div className="update-form-container">
      <input    /* this is responisble for taking in the users input to update the Dog List */
        type="text"
        placeholder="Enter new breed"
        value={newBreed}
        onChange={(e) => setNewBreed(e.target.value)}
      />
      <button className='btn btn-primary' onClick={handleUpdate}>Update</button>
      <button className='btn btn-danger' onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default UpdateForm;
