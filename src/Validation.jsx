import React from 'react';

const Validation = (props) => {
  let messageText = null;
  if (props.lengthText <= 5) {
    messageText = (
      <div>
        <p>Length of name:{props.lengthText}</p>
        <p>text too short</p>
      </div>
    )
  } else {
    messageText = (
      <div>
        <p>Length of name:{props.lengthText}</p>
        <p>text too long</p>
      </div>

    )
  }

  return (
    <div className="Validation">
      <h2>Length of text:</h2>
      <div>{messageText}</div>
    </div>
  );

}

export default Validation;