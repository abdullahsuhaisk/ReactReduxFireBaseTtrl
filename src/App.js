import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import ProjectNew from './components/projects/ProjectNew';
import Test from './components/test'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/project/:id" component={ProjectDetails} />
          <Route path="/signIn" component={SignIn} />
          <Route path="/signUp" component={SignUp} />
          <Route path="/newProject" component={ProjectNew} />
          <Route path="/test" component={Test} />
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
