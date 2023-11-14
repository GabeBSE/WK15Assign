


import React, { useState } from 'react';
import UpdateForm from './UpdateForm';

const DogList = ({ favoriteBreeds, onUpdate, onDelete }) => {
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [selectedUpdateIndex, setSelectedUpdateIndex] = useState(null);


/* when Update btn is clicked (next to dog breed list) it triggers handleUpdateClick */
  const handleUpdateClick = (index) => {   
    setShowUpdateForm(true);
    setSelectedUpdateIndex(index);
  };

  const handleUpdateCancel = () => {  /* When update is cancelled, handleUpdateCancel is triggered */
    setShowUpdateForm(false);
    setSelectedUpdateIndex(null);
  };

  return ( /* This displays the Dog List, Update and Delete buttons */
    <div className="dog-list">
      <h3>Favorite Dog Breeds</h3>
      <ul>
        {favoriteBreeds.map((breed, index) => (
          <li key={index}>
            {index + 1}. {breed.name}
            <button className='btn btn-primary' onClick={() => handleUpdateClick(index)}>Update</button>
            <button className='btn btn-danger' onClick={() => onDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>

      {showUpdateForm && (
        <UpdateForm
          onUpdate={(newBreed) => {
            onUpdate(selectedUpdateIndex, newBreed);
            handleUpdateCancel();
          }}
          onCancel={handleUpdateCancel}
        />
      )}
    </div>
  );
};

export default DogList;
