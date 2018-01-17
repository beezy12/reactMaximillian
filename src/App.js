import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
    state = {
        persons: [
            { id: 'oouo', name: 'beezy', age: 38 },
            { id: 'ieieuie', name: 'bubby', age: 10 },
            { id: 'oeieo', name: 'manna', age: 29 }
        ],
        showPersons: false
    }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
        return p.id === id;
    });

    // using spread operator here to avoid just using a reference to the state object. you NEVER want to mutate state directly...and you'd only be mutating a reference to the state object. so use spread operator to make a COPY of the state object
    const person = {
        ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    // ALWAYES WORK WITH COPIES
    const persons = [...this.state.persons];
    persons[personIndex] = person;


    // **** this is another way to avoid mutating references to state objects. you can just create a new object
    // const person = Object.assign({}, this.state.persons[personIndex])

    this.setState( {persons: persons} )
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
                          click={() => this.deletePersonHandler(index)}
                          key={person.id}
                          changed={(event) => this.nameChangeHandler(event, person.id)} />
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
