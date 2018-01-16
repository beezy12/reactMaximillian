import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
    state = {
        persons: [
            { name: 'beezy', age: 38 },
            { name: 'bubby', age: 10 },
            { name: 'manna', age: 29 }
        ],
        showPersons: false
    }

  switchNameHandler = (newName) => {
    this.setState( {
      persons: [
        { name: newName, age: 38 },
        { name: 'somebody', age: 10 },
        { name: 'manna', age: 29 }
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'briguy', age: 38 },
        { name: event.target.value, age: 11 },
        { name: 'manna', age: 2 }
      ]
    })
  }

  togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
  }

  render() {
      const style = {
          backgroundColor: 'white',
          font: 'inherit',
          border: '1px solid blue',
          padding: '8px',
          cursor: 'pointer'
      };


      return (
          <div className="App">
          <h1>I AM REACT</h1>
          <button
              style={style}
              onClick={this.togglePersonsHandler}>Switch name</button>
          {
              this.state.showPersons === true ?
                <div>
                    <Person
                      name={this.state.persons[0].name}
                      age={this.state.persons[0].age}/>
                    <Person
                      name={this.state.persons[1].name}
                      age={this.state.persons[1].age}
                      click={this.switchNameHandler.bind(this, 'toonces')}
                      changed={this.nameChangeHandler} >My hobbies: being a good boy</Person>
                    <Person
                      name={this.state.persons[2].name}
                      age={this.state.persons[2].age}/>
                </div> : null
            }
        </div>
    );
  }
}

export default App;
