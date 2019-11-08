import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import './App.css';
import LoginForm from './components/LoginForm';
import PrivateRoute from './components/PrivateRoute';
import FriendList from './components/FriendList'

function App() {
  
  return (
    <Router>
      <div className="App">
        <Link to="/login">Login</Link>
        <br></br>       
        <Link to="/friends">Friend List</Link>
        <Switch>
          
          <PrivateRoute exact path="/friends" component={FriendList} />
          <Route path="/login" component={LoginForm}/>
          <Route exact path="/"  component={LoginForm} />
          <Route  component={LoginForm}/> 
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
