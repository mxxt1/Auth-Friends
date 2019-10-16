import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import './App.css';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to='/login'>Login</Link>
          </li>
        </ul>
        <Switch>
          <Route path='/login' component={LoginForm}/>
          <Route component={LoginForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
