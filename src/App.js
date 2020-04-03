import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput';
import UserOutput from './UserOutput';

class App extends Component {
  state = {
    persons: [
      { name: 'lingling', age: '32' },
      { name: 'matthieu', age: '35' },
      { name: 'Clément', age: '3' }
    ],
    otherState: 'othersate',
    togglePerson: false,
  }

  // why not used const changeNameHandler =()=>....
  changeNameHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 32 },
        { name: event.target.value, age: 35 },
        { name: event.target.value, age: 3 },
      ]
    },
    )
  }

  swithNameHandler = (newName) => {
    console.log('switch');
    this.setState({
      persons: [
        { name: newName, age: 32 },
        { name: 'lily', age: 30 },
        { name: 'simon', age: 1 },
      ]
    })
  }

  togglePersonHandler = () => {
    // below in order not to change the initil state so const another variable
    const showPerson = this.state.togglePerson;
    this.setState({
      togglePerson: !showPerson,
    })
  }

  render() {
    const styleButton = {
      color: 'blue',
      curson: 'pointer'
    }
    const stylePerson = {
      display: 'inline',
    }
    let persons = null;
    if (this.state.togglePerson) {
      persons = (
        <div>
          {/* <button style={styleButton} onClick={this.swithNameHandler}>Switch Name</button> */}
          {
            this.state.persons.map((person) => {
              return (
                <UserOutput
                  name={person.name}
                  age={person.age}
                  click={this.swithNameHandler.bind(this,'Max')}
                />
              )
            })
          }
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi, I'am a complete React App</h1>
        <UserInput
          name={this.state.persons.name}
          changeName={this.changeNameHandler}
        />
        <button onClick={this.togglePersonHandler}>Toggle Persons</button>
        <div className={stylePerson}>
          {persons}
        </div>
      </div>
    );
  }
}

export default App;
