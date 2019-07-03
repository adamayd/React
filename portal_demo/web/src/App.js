import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Portlets from './Components/Portlets';
import Portlet from './Components/Portlet';
import CreatePortlet from './Components/CreatePortlet';
import Callback from './Auth/Callback';
import SecuredRoute from './Auth/SecuredRoute';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Route exact path='/' component={Portlets}/>
        <Route exact path='/portlet/:portletId' component={Portlet}/>
        <Route exact path='/callback' component={Callback}/>
        <SecuredRoute path='/create-portlet' component={CreatePortlet}/>
      </div>
    );
  }
}

export default App;
