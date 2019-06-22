import React from 'react';
import {Component} from 'react';
import styled from 'styled-components';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

//components
import Header from '../atoms/Header';
import LoggedIn from '../atoms/LoggedIn';
import AddFriend from '../atoms/AddFriend';
import AddPost from '../atoms/AddPost';
import Divider from '../atoms/Divider';
import PostItem from  '../molecules/PostItem';
import Login from '../molecules/Login';

//apollo client setup local
// const client = new ApolloClient({
//     uri: 'http://localhost:4000/graphql'
//   })

//apollo client setup heroku
const client = new ApolloClient({
uri: 'https://fitbook-graphql-heroku.herokuapp.com/graphql'
})

const HomepageWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-template-areas: "Head    Head    Head2    Head2"
                         "addPost addPost addPost addPost"
                         "Divider Divider Divider Divider"
                         "Post    Post    Post    Friend";
    height: 80px;
`

const HeadWrapper = styled.div`
    grid-area: Head;
    align-self: center;
`

const Head2Wrapper = styled.div`
    grid-area: Head2;
    align-self: center;
`

const AddFriendWrapper = styled.div`
    margin-left: 10px;
    grid-area: Friend;
    align-self: start;
    justify-self: center;
`


const AddPostWrapper = styled.div`
    grid-area: addPost;
    margin-top: 10px;
    margin-bottom: 10px;
    justify-self: center;
`

const DividerWrapper = styled.div`
    grid-area: Divider;
    align-self: center;
`

const PostItemWrapper = styled.div`
    grid-area: Post;
    justify-self: center;
`
class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedin: false,
            userID: "",
            friendLists: [],
        }
    }

    PageChange = (userID, friendLists) => {
        this.setState ({
            loggedin: !this.state.loggedin,
            userID: userID,
            friendLists: friendLists
        })
    }

    render() {
        return (
            <ApolloProvider client={client}>
                    {this.state.loggedin?
                            <HomepageWrapper>
                                <HeadWrapper>
                                    <Header />
                                </HeadWrapper>
                                <Head2Wrapper>
                                    <LoggedIn />
                                </Head2Wrapper>
                                <AddFriendWrapper>
                                    <AddFriend userID={this.state.userID} friendLists={this.state.friendLists}/>
                                </AddFriendWrapper>
                                <AddPostWrapper>
                                    <AddPost userID={this.state.userID}/>
                                </AddPostWrapper>
                                <DividerWrapper>
                                    <Divider />
                                </DividerWrapper>
                                <PostItemWrapper >
                                    <PostItem userID={this.state.userID} friendLists={this.state.friendLists}/>
                                </PostItemWrapper>
                            </HomepageWrapper> :
                            <Login pagechange={this.PageChange}/>
                    }
            </ApolloProvider>
        )
    }
}

export default Homepage;