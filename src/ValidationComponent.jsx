import React from 'react';

const ValidationComponent = (props) => {
  let messageText = null;
  if (props.lengthText <= 5) {
    messageText = (
      <p>text too short less than 5 letters</p>
    )
  } else {
    messageText = (<p>text too long more than 5 letters</p>)
  }

  return (
    <div className="ValidationComponent">
      <h2>Length of text:</h2>
      <div>{messageText}</div>
    </div>
  );

}

export default ValidationComponent;