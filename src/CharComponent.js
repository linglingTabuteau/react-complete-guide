import React from 'react';

const CharComponent = (props) => {
  const styleChar = {
    display: 'inline-block',
    padding: '16px',
    margin: '16px',
    // to textAlign because can't use - in the JS variable names
    textAlign: 'center',
    border: '2px solid black',
  }

  let pForm = null;
  if (props.letter) {
    const arrLetter = props.letter.split('');
    pForm = (
      <div>
        {
          arrLetter.map((letter, index) => {
            return (
              <div
                style={styleChar}
                key={index}
                onClick={props.deleteLetter}>
                <p>{letter}</p>
              </div>
            )
          })
        }
      </div>
    )
  }

  return (
    <div className="CharComponent">
      {pForm}
    </div>
  )
}

export default CharComponent;