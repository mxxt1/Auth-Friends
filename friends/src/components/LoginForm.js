import React, {useState} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import axios from 'axios';


const LoginForm = () => {

    //initialize state
    const [userCreds, setUserCreds] = useState({
        credentials: {
            username: '',
            password: ''
        }
    });



   const handleChange = event => {
       console.log(event.target.value);
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
       console.log(userCreds.credentials);
       console.log(`button fired`);
        axios.post("http://localhost:5000/api/login", userCreds.credentials)
        .then( response => {
            console.log(response)
            localStorage.setItem('token', response.data.payload)
        })
        .catch(error => console.log(error)) 
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
