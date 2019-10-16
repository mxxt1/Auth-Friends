import React from 'react'

const Card = (props) => {
    console.log(props);


    return (
        <div>
            <h1>{props.friend.name}</h1>
            <p>{props.friend.email}</p>
            <p>{props.friend.age}</p>
        </div>
    )
}

export default Card


// props.id
// props.name
// props.age
// props.email