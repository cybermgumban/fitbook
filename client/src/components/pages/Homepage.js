import React from 'react';
import {Component} from 'react';

//components
import Header from '../molecules/Header';
import AddPost from '../atoms/AddPost';
import Divider from '../atoms/Divider';
import PostItem from  '../molecules/PostItem';

class Homepage extends Component {
    render() {
        return (
            <div>
                <Header>
                    <AddPost />
                    <Divider />
                    <PostItem />
                </Header>
            </div>
        )
    }
}

export default Homepage;