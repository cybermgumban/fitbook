import React from 'react';
import {Component} from 'react';
import styled from 'styled-components';

//components
import Header from '../atoms/Header';
import LoggedIn from '../atoms/LoggedIn';
// import Login from '../atoms/Login'
import AddPost from '../atoms/AddPost';
import Divider from '../atoms/Divider';
import PostItem from  '../molecules/PostItem';

const HomepageWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-template-areas: "Head    Head    Head2    Head2"
                         "addPost addPost addPost addPost"
                         "Divider Divider Divider Divider"
                         "Post    Post    Post    Post";
    background-color: rgb(0, 153, 51);
    height: 80px;
`

const HeadWrapper = styled.div`
    grid-area: Head;
    align-self: center;
`

const Head2Wrapper = styled.div`
    grid-area: Head2;
    justify-self: end;
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
    render() {
        return (
            <HomepageWrapper>
                <HeadWrapper><Header /></HeadWrapper>
                <Head2Wrapper><LoggedIn /></Head2Wrapper>
                <AddPostWrapper><AddPost /></AddPostWrapper>
                <DividerWrapper><Divider /></DividerWrapper>
                <PostItemWrapper><PostItem /></PostItemWrapper>
            </HomepageWrapper>
        )
    }
}

export default Homepage;