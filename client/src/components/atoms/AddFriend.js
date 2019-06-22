import React from 'react';
import {Component} from 'react';
import {graphql, compose} from 'react-apollo';
import { addFriendMutation, getUsersQuery } from '../../queries/queries';

class AddFriend extends Component {
    
    onAddFriendClick(e) {
        e.preventDefault(); 
        this.props.addFriendMutation({
            variables: {
                userID: this.props.userID,
                friendsID: e.target.value,
            },
        })
    }

    render() {
        return (
            this.props.getUsersQuery.users.map((user) => {
                return (
                    <div key={user.id}>
                        <p>{user.firstName} {user.lastName}</p>
                        <button value={user.id} onClick={(e) => this.onAddFriendClick(e)}>Add Friend</button>
                    </div>
                )
            })
        )
    }
}

export default compose(
    graphql(addFriendMutation, {name: "addFriendMutation"}),
    graphql(getUsersQuery, {name: "getUsersQuery"})
)(AddFriend);