import React, { useState } from 'react';
import axios from 'axios';
import DogList from './DogList';
import SearchBar from './SearchBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [favoriteBreeds, setFavoriteBreeds] = useState([]);

  const handleSearch = async (breed) => {    /* Makes a request to the API to fetch data */
    try {
      const response = await axios.get(
        `https://dog.ceo/api/breed/${breed}/images/random`
      );

      const newFavorite = {
        name: breed,
        image: response.data.message,
      };

      setFavoriteBreeds((prevBreeds) => [...prevBreeds, newFavorite]);/* this func will allow a new */
    } catch (error) {                                  /* dog breed to be added to the list of dogs */
      console.error('Error fetching dog breed:', error);
    }
  };

  const handleUpdate = (index, newBreed) => { /* Update process is handled here */
    setFavoriteBreeds((prevBreeds) =>
      prevBreeds.map((breed, i) =>
        i === index ? { ...breed, name: newBreed } : breed
      )
    );
  };

  const handleDelete = (index) => {   /* handles the delete process */
    setFavoriteBreeds((prevBreeds) =>
      prevBreeds.filter((_, i) => i !== index)
    );
  };

  return (         /* This div displays the h1 header, search bar and dog list on the browser */
    <div className="container">   
      <h1>My Favorite Dog Breeds</h1>
      <SearchBar onSearch={handleSearch} />
      <DogList
        favoriteBreeds={favoriteBreeds}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default App;
