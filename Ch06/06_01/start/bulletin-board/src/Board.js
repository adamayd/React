import React, { Component } from 'react';
// import React, { Component, PropTypes } from 'react'; // Still trying to fix proptypes
// import React from 'react' //used in the tutorial but trying to upgrade app to R16
// import logo from './logo.svg';
import './App.css';
import Note from './Note';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

class Board extends Component {
//   propTypes: {
//       count: function(props, propName) {
//           if(typeof props[propName] != 'number') {
//               return new Error('The count must be a number!')
//           }
//           if(props[propName] > 100) {
//               return new Error('Creating ' + props[propName] + ' notes is ridiculous!')
//           }
//       }
//   },
//   getInitialState() {
//       return {
//           notes: []
//       }
//   }

  constructor(props) { //replaces getInitialState above
      super(props)
        this.state = {
            notes: []
        }
  }

  componentWillMount() {
      if (this.props.count) {
          var url = `https://baconipsum.com/api/?type=all-meat&sentences=${this.props.count}`
          fetch(url)
              .then(results => results.json())
              .then(array => array[0])
              .then(text => text.split('. '))
              .then(array => array.forEach(
                  sentence => this.add(sentence)))
              .catch(function(err) {
                  console.error('Did\'t connect to the API', err)
              })                       
      }
  }

  nextId() {
      this.uniqueId = this.uniqueId || 0
      return this.uniqueId++
  }

  add(text) {
      var notes = [
          ...this.state.notes,
          {
              id: this.nextId(),
              note: text
          }
      ]
      console.log(notes)
      this.setState({notes})
  }

  update(newText, id) {
      var notes = this.state.notes.map(
          note => (note.id !== id) ? note : {...note, note: newText}
      )
      this.setState({notes})
  }

  remove(id) {
      var notes = this.state.notes.filter(
          note => note.id !== id)
      this.setState({notes})
  }

  eachNote(note) {
      return (<Note key={note.id}  
                    id={note.id} 
                    onChange={this.update} 
                    onRemove={this.remove}>
                    {note.note}
              </Note>)
  }

  render() {
      return (<div className="board">
                  {this.state.notes.map(this.eachNote)}
                  <button onClick={() => this.add('New Note')}>+</button>
              </div>)
  }
}

Board.propTypes = {
    count: function(props, propName) {
        if(typeof props[propName] !== 'number') {
            return new Error('The count must be a number!')
        }
        if(props[propName] > 100) {
            return new Error('Creating ' + props[propName] + ' notes is ridiculous!')
        }
    }
}

export default Board;
