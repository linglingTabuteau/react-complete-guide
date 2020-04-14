import React from 'react';
import './UserOutput.css';

const UserOutput =(props)=> {
  return (
    <div className="UserOutput">
      <p>This is {props.name}</p>
      <p>I am {props.age} years old</p>
      <button onClick={props.click1}>Switch Name</button>
      <button onClick={props.click2}>Delete Name</button>
    </div>
  );
}

export default UserOutput