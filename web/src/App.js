import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import Portlets from './Portlets/Portlets';
import Portlet from './Portlet/Portlet';
import Callback from './Auth/Callback';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Route exact path='/' component={Portlets}/>
        <Route exact path='/question/:questionId' component={Portlet}/>
        <Route exact path='/callback' component={Callback}/>
      </div>
    );
  }
}

export default App;
