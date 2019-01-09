import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import Portlets from './Portlets/Portlets';
import Portlet from './Portlet/Portlet';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Route exact path='/' component={Portlets}/>
        <Route exact path='/question/:questionId' component={Portlet}/>
      </div>
    );
  }
}

export default App;
