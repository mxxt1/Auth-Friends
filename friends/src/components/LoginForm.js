import React, {useState} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import axios from 'axios';


const LoginForm = props => {
    // console.log(props);
    //initialize state
    const [userCreds, setUserCreds] = useState({
        credentials: {
            username: '',
            password: ''
        }
    });

    const [loading, setLoading] = useState(false);



   const handleChange = event => {
    //    console.log(event.target.value);
        setUserCreds({
            credentials: {
                ...userCreds.credentials,
                [event.target.name]: event.target.value
            }
        });
    };
    
    //login endpoint baseURL/api/login
   const loginSubmit = event => {
        event.preventDefault();
        // setLoading(true);
       console.log(`button fired`);
        axiosWithAuth().post("http://localhost:5000/api/login", userCreds.credentials)
        .then(response => {
            // setLoading(false);
            // console.log(response);
            localStorage.setItem('token', response.data.payload);
            props.history.push("/friends");
        })
        // .then(() => console.log(localStorage.token))
        .catch(error => {
            setLoading(false);
            console.log(error);
        }); 
    };
    
    
    return (
        <div>
            <form onSubmit={loginSubmit}>
                <input 
                    onChange={handleChange}
                    type = 'text'
                    name = 'username'
                    value = {userCreds.credentials.username}
                />
                <input 
                    onChange={handleChange}
                    type='text'
                    name='password'
                    value={userCreds.credentials.password}
                />
                <button>Log In</button>
            </form>
        </div>
    )
}

export default LoginForm
