import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './views/home/Home';
import Login from './views/login/Login';
import NotFound from './views/404/NotFind'
class App extends Component {
  componentWillMount(){
  }
  componentDidMount(){
  }
  render() { 
    return (
      <Router>
        <Switch>
            <Route exact path="/" render={() => <Redirect to="/Home" push />} />
            <Route path="/Home" component={Home} />
            <Route path="/404" component={NotFound} />
            <Route path="/login" component={Login} />
            <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
  
}
 


export default App 
