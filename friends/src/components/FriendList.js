import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import Card from './Card';

const FriendList = () => {
    
    const [friendList, setFriendList] = useState([]);


    useEffect(() => {
        axiosWithAuth().get('api/friends')
        .then(response => {
            console.log(response.data);
            // setFriendList(response)
        })
        .catch(error => console.log(error))
    },[])
    
    
    
    
    
    return (
        <div>
            <h1>Friends List Here</h1>
        </div>
    )
}

export default FriendList
