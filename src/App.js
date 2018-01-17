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

  deletePersonHandler = (personIndex) => {
      // you never want to mutate the original array...so make a copy
      // create copy of array by calling slice method, otherwise you just have a reference a pointer to the array or object in Javascript
      //const persons = this.state.persons.slice();
      // or this
      const persons = [...this.state.persons];
      persons.splice(personIndex, 1);
      this.setState({persons: persons})
  }

  render() {
      const style = {
          backgroundColor: 'white',
          font: 'inherit',
          border: '1px solid blue',
          padding: '8px',
          cursor: 'pointer'
      };

      let persons = null;

      if (this.state.showPersons) {
          persons = (
              <div>
                  {this.state.persons.map((person, index) => {
                      return <Person
                          name={person.name}
                          age={person.age}
                          click={() => this.deletePersonHandler(index)} />
                  })}
              </div>
          );
      }


      return (
          <div className="App">
              <h1>I AM REACT</h1>
              <button
                  style={style}
                  onClick={this.togglePersonsHandler}>Show Peoples</button>
              {persons}
          </div>
      );
  }
}

export default App;
