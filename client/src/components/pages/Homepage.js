import React from 'react';
import {Component} from 'react';

//components
import Header from '../atoms/Header'
import AddPost from '../atoms/AddPost'
import Divider from '../atoms/Divider'

class Homepage extends Component {
    render() {
        return (
            <div>
                <Header>
                    <AddPost />
                    <Divider />
                </Header>
            </div>
        )
    }
}

export default Homepage;