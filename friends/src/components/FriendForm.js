import React, { useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const FriendForm = props => {
    const [newFriend, setNewFriend] = useState({ name: "", age: 0, email: "" })

    const handleChanges = event => {
        setNewFriend({
            ...newFriend,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault()

        axiosWithAuth()
            .post('/api/friends', newFriend)
            .then(response => {
                props.setFriends(response.data)
            })
    }

    return (
        <div>
            <h3>Add Friend:</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={newFriend.username}
                    onChange={handleChanges}
                />
                <input
                    type="number"
                    name="age"
                    value={newFriend.age}
                    onChange={handleChanges}
                />
                <input
                    type="email"
                    name="email"
                    value={newFriend.email}
                    onChange={handleChanges}
                />
                <button>Add Friend</button>
            </form>
        </div>
    )
}

export default FriendForm