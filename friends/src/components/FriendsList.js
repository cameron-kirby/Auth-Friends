import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

import FriendForm from './FriendForm'
import Friend from './Friend'

const FriendsList = props => {
    const [friends, setFriends] = useState([])
    // Get initial friends on load
    
    useEffect(() => {
        axiosWithAuth()
            .get('/api/friends')
            .then(response => {
                setFriends(...friends, response.data)
            })
            .catch(error => console.log(error))
    }, [])
    
    
    return (
        <div className="friends-list">
            {
                friends.map(friend => {
                    return <Friend key={friend.id} friend={friend} />
                })
            }
            <FriendForm setFriends={setFriends} />
        </div>
    )
}

export default FriendsList