import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Portlets from './Components/Portlets';
import Portlet from './Components/Portlet';
import Callback from './Auth/Callback';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Route exact path='/' component={Portlets}/>
        <Route exact path='/portlet/:portletId' component={Portlet}/>
        <Route exact path='/callback' component={Callback}/>
      </div>
    );
  }
}

export default App;
