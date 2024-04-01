import React, { useState } from 'react';

import Card from './Card';
import Button from './Button';
import './AddUser.css';

const AddUser = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [enteredImage, setEnteredImage] = useState('');
  const [enteredMajor, setEnteredMajor] = useState('');

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value); 
  }; 
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const imageChangeHandler = (event) => {
    setEnteredImage(event.target.value); 
  };
  const majorChangeHandler = (event) => {
    setEnteredMajor(event.target.value); 
  };
  const addUserHandler = (event) => {
    event.preventDefault(); 

    if (enteredName.trim().length === 0) {
      return; 
    }
  
    const userData = {
      id: Math.random().toString(), 
      name: enteredName, 
      age: enteredAge, 
      img: enteredImage, 
      major: enteredMajor,
    };

  props.onAddUser(userData); 

  setEnteredName(''); 
  setEnteredAge(''); 
  setEnteredImage(''); 
  setEnteredMajor(''); 
  
};

return (
  <Card className="input">
    <form onSubmit={addUserHandler}>
      <label htmlFor="username">Username</label>
      <input
        id="username"
        type="text"
        value={enteredName}
        onChange={nameChangeHandler}
      />

      <label htmlFor="age">Age (Years)</label>
      <input
        id="age"
        type="number"
        value={enteredAge}
        onChange={ageChangeHandler}
      />

      <label htmlFor="img">Link to image</label>
      <input
        id="img"
        type="text"
        value={enteredImage}
        onChange={imageChangeHandler}
      />

      <label htmlFor="major">Major</label>
      <input
        id="major"
        type="text"
        value={enteredMajor}
        onChange={majorChangeHandler}
      />
      <Button type="submit">AddUser</Button>
    </form>
  </Card>
);
};

export default AddUser;

