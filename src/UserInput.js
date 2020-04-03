import React from 'react';

const UserInput =(props) =>{
  const styleInline = {
    color: 'red',
    margin: '20px'
  }
  return (
    <input 
      type='text' 
      onChange = {props.changeName}
      value = {props.name}
      style={styleInline}
    />
  );
}

export default UserInput;