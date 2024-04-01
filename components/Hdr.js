import React from 'react';
import Button from './Button';
import './Hdr.css';

const Hdr = ({onAddUserClick}) => {
  return (
    <div className="hdr">
     <h1>Signup</h1>
     <Button onClick={onAddUserClick}>Add User</Button>
    </div>
  );
};

export default Hdr;