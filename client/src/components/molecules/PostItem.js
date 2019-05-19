import React from 'react';
import styled from 'styled-components';

//components
import PicIcon from '../atoms/PicIcon';
import Name from '../atoms/Name';
import Post from '../atoms/Post';
import AddComment from '../atoms/AddComment';
import Divider from '../atoms/Divider';

const PostItemWrapper = styled.div`
    margin-left: 100px;
    margin-right: 100px;
    border: 1px solid rgb(192,192,192);
    padding: 10px;
`

const PostItem = () => {
    return (
        <PostItemWrapper>
            <div>
                <PicIcon />
                <Name />
            </div>
            <div>
                <Post />
                <Divider />
            </div>
            <div>
                <AddComment />
            </div>
        </PostItemWrapper>
    )
}

export default PostItem;