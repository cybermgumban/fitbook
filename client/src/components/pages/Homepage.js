import React from 'react';
import {Component} from 'react';
import styled from 'styled-components';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

//components
import Header from '../atoms/Header';
import LoggedIn from '../atoms/LoggedIn';
import AddPost from '../atoms/AddPost';
import Divider from '../atoms/Divider';
import PostItem from  '../molecules/PostItem';
import Loginpage from '../pages/Loginpage'

//apollo client setup local
// const client = new ApolloClient({
//     uri: 'http://localhost:4000/graphql'
//   })

//apollo client setup heroku
const client = new ApolloClient({
uri: 'http://localhost:4000/graphql'
})

const HomepageWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-template-areas: "Head    Head    Head2    Head2"
                         "addPost addPost addPost addPost"
                         "Divider Divider Divider Divider"
                         "Post    Post    Post    Post";
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
        }
    }

    PageChange = (userID) => {
        this.setState ({
            loggedin: !this.state.loggedin,
        })

        this.setState({
            userID: userID
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
                            <AddPostWrapper>
                                <AddPost userID={this.state.userID}/>
                            </AddPostWrapper>
                            <DividerWrapper>
                                <Divider />
                            </DividerWrapper>
                            <PostItemWrapper >
                                <PostItem userID={this.state.userID}/>
                            </PostItemWrapper>
                        </HomepageWrapper> :
                        <Loginpage pagechange={this.PageChange}/>
                    }
            </ApolloProvider>
        )
    }
}

export default Homepage;