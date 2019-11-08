import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import Card from './Card';

const FriendList = () => {
    
    const [friendList, setFriendList] = useState([]);


    useEffect(() => {
        axiosWithAuth().get('api/friends')
        .then(response => {
            console.log(response.data);
            setFriendList(response.data)
        })
        .catch(error => console.log(error))
    },[])
    
    
    
    
    
    return (
        <div>
            {friendList.map( (friend,index) => (
                <Card 
                    friend={friend}
                    key={index}
                />
            ))}
        </div>
    )
}

export default FriendList
