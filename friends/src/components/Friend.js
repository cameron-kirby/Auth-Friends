import React from 'react'

const Friend = props => {
    return (
        <div className="friend">
            <h2>{props.friend.name}</h2>
            <p>Email: {props.friend.email}</p>
        </div>
    )
}

export default Friend