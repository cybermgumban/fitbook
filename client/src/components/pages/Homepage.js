import React from 'react';
import {Component} from 'react';
import styled from 'styled-components';

//components
import Header from '../atoms/Header';
import LoggedIn from '../atoms/LoggedIn';
// import Login from '../atoms/Login'
import AddPost from '../atoms/AddPost';
import Divider from '../atoms/Divider';
// import PostItem from  '../molecules/PostItem';

const HomepageWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-template-areas: "Head    Head    Head2    Head2"
                         "addPost addPost addPost addPost"
                         "Divider Divider Divider Divider";
    background-color: rgb(0, 153, 51);
    height: 80px;
`

class Homepage extends Component {
    render() {
        return (
            <HomepageWrapper>
                <div style={{gridArea: "Head", alignSelf: "center"}}><Header /></div>
                <div style={{gridArea: "Head2", justifySelf: "end", alignSelf: "center"}}><LoggedIn /></div>
                <div style={{gridArea: "addPost", gridColumn: "2/4", width: "100vw", marginTop: "10px", marginBottom: "10px"}}><AddPost /></div>
                <div style={{gridArea: "Divider", alignSelf: "center"}}><Divider /></div>
            </HomepageWrapper>
        )
    }
}

export default Homepage;