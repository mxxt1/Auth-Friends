import React from 'react';
import {Route, Redirect} from 'react-router-dom';

//renders Route and passes props through it
//check if token exists, if so, direct to private Route, otherwise, redirect to login


const PrivateRoute = ({component:Component, ...rest}) => {
    console.log(rest);
    console.log(localStorage.token);
    console.log(`from inside privateroute`);
    
    
    return (
        <div>
        <Route 
        {...rest}
        render = {props => 
            localStorage.token 
            ? (<Component {...props} />) 
            : (<Redirect to='/login' />)
        }/>
        </div>
    );
}

export default PrivateRoute


