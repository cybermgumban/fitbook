import React from 'react';
import styled from 'styled-components';
import {Component} from 'react';
import {graphql, compose} from 'react-apollo';
import { addFriendMutation, getUsersQuery } from '../../queries/queries';


const DivWrapper = styled.div`
    margin: 0;
    padding: 0;
`

const ButtonWrapper = styled.button`
    margin-right: 5px;
`

class AddFriend extends Component {

    filterData() {
            const IDs = [];
            IDs.push(this.props.userID);
            this.props.friendLists.map((friend) => {
                return IDs.push(friend.friendsID)
            })
            
            const newdata = this.props.getUsersQuery.users.filter((element) => {
                return IDs.indexOf(element.id) === -1
            })

            return newdata
    }
    
    onAddFriendClick(e) {
        e.preventDefault(); 
        this.props.addFriendMutation({
            variables: {
                userID: this.props.userID,
                friendsID: e.target.value,
            }
        })
    }

    render() {
        return (
            this.filterData().map((user) => {
                return (
                    <DivWrapper key={user.id}>
                        <ButtonWrapper value={user.id} onClick={(e) => this.onAddFriendClick(e)}>Add Friend</ButtonWrapper>
                        <span>{user.firstName} {user.lastName}</span>
                    </DivWrapper>
                )
            })
        )
    }
}

export default compose(
    graphql(addFriendMutation, {name: "addFriendMutation"}),
    graphql(getUsersQuery, {name: "getUsersQuery"})
)(AddFriend);