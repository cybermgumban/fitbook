import React from 'react';
import {Component} from 'react';
import styled from 'styled-components';
import {graphql} from 'react-apollo';
import { getPostQuery } from '../../queries/queries';

//components
import PicIcon from '../atoms/PicIcon';
import Name from '../atoms/Name';
import Post from '../atoms/Post';
import AddComment from '../atoms/AddComment';
import Divider from '../atoms/Divider';
import CommentItem from './CommentItem';

const PostItemWrapper = styled.div`
    margin-bottom: 60px;
`

class PostItem extends Component {
    displayPosts() {
        const data = this.props.data;
        
        if(data.loading) {
            return (
                <div>Loading Posts...</div>
            )
        } else {
                return data.user.posts.map((post,index) => {
                    return (
                            <PostItemWrapper key={index}>
                                <div>
                                    <PicIcon newht={"50px"}/>
                                    <Name names={post.user}/>
                                </div>
                                <div>
                                    <Post inside={post.content}/>
                                    <Divider />
                                </div>
                                <div>
                                    <AddComment post={post}/>
                                    <Divider />
                                </div>
                                <div>
                                    <CommentItem comments={post.postcomments}/>
                                </div>
                                <div>
                                    <Divider />
                                </div>
                            </PostItemWrapper>
                    )
                })
        }
    }

    render() {
        return (
            <div>
                {this.displayPosts()}
            </div>
        )
    }
}

export default graphql(getPostQuery, {
    options: (props) => {
        return {
            variables: {
                id: props.userID
            }
        }
    }
})(PostItem);