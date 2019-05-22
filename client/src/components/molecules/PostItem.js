import React from 'react';
import styled from 'styled-components';

//components
import PicIcon from '../atoms/PicIcon';
import Name from '../atoms/Name';
import Post from '../atoms/Post';
import AddComment from '../atoms/AddComment';
import Divider from '../atoms/Divider';
import CommentItem from './CommentItem';

const PostItemWrapper = styled.div`
`

const PostItem = () => {
    return (
        <PostItemWrapper>
            <div>
                <PicIcon newht={"50px"}/>
                <Name />
            </div>
            <div>
                <Post inside={"This is a post...This is a post...This is a post"}/>
                <Divider />
            </div>
            <div>
                <AddComment />
                <Divider />
            </div>
            <div>
                <CommentItem />
            </div>
        </PostItemWrapper>
    )
}

export default PostItem;