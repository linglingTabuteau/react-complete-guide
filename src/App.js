import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput';
import UserOutput from './UserOutput';
import ValidationComponent from './ValidationComponent';
import CharComponent from './CharComponent';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Lingling', age: '32', lText: 0 },
      { id: 2, name: 'Mtthieu', age: '35', lText: 0 },
      { id: 3, name: 'Clément', age: '3', lText: 0 }
    ],
    otherState: 'othersate',
    togglePerson: false,
  }

  // ? why not used const changeNameHandler =()=>....
  changeNameHandler = (id, e) => {
    const personIndex = this.state.persons.findIndex((person) => {
      return person.id === id;
    })
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = e.target.value;
    person.lText = person.name.length;
    const persons = [
      ...this.state.persons
    ];

    persons[personIndex] = person;
    this.setState({
      persons: persons,
    })
  }

  swithNameHandler = (newName) => {
    this.setState({
      persons: [
        { id: 1, name: newName, age: 32, lText: 0 },
        { id: 2, name: 'lily', age: 30, lText: 0 },
        { id: 3, name: 'simon', age: 1, lText: 0 },
      ]
    })
  }

  togglePersonHandler = () => {
    // below in order not to change the initil state so assign another variable showPerson
    const showPerson = this.state.togglePerson;
    this.setState({
      togglePerson: !showPerson,
    })
  }

  deletePersonHandler = (personIndex) => {
    const listUpdatedPerson = [...this.state.persons];
    listUpdatedPerson.splice(personIndex, 1);
    this.setState({
      persons: listUpdatedPerson
    })
  }

  deleteLetterHandler = (id,index, e) => {
    const letterList = [...this.state.persons];
    const letterArray = letterList[index].name.split('');
    letterArray.splice(index, 1);
    let letterUpdated = letterArray.join('');
    
    const personIndex = this.state.persons.findIndex((person) => {
      return person.id === id;
    })
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = letterUpdated;
    person.lText = person.name.length;
    
    const persons = [
      ...this.state.persons
    ];

    persons[personIndex] = person;
    this.setState({
      persons:persons
    })
  }

  render() {
    const stylePerson = {
      border: '2px solid blue',
      width: '50%',
      padding: '20px',
      margin: '20px',
    }

    const styleButton = {
      margin: '20px',
    }

    let persons = null;
    if (this.state.togglePerson) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return (
                <div className="person" style={stylePerson} key={person.id}>
                  <UserOutput
                    name={person.name}
                    age={person.age}
                    click1={this.swithNameHandler.bind(this, 'Max')}
                    click2={this.deletePersonHandler.bind(this, index)}
                  />
                  <UserInput
                    name={this.state.persons[index].name}
                    // changeName={(event) => { this.changeNameHandler(event, person.id) }}
                    changeName={this.changeNameHandler.bind(this, person.id)}
                  />
                  <ValidationComponent
                    lengthText={this.state.persons[index].lText}
                  />
                  <CharComponent
                    letter={this.state.persons[index].name}
                    deleteLetter={this.deleteLetterHandler.bind(this, person.id, index)}
                  />
                </div>
              )
            })
          }
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi, I'am a complete React App</h1>
        <button onClick={this.togglePersonHandler} style={styleButton}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
