import React from 'react';

const ValidationComponent = (props) => {
  return (
    <div className="ValidationComponent">
      <h2>Length of text:</h2>
      <p>{props.lengthText}</p>
    </div>
  );

}

export default ValidationComponent;