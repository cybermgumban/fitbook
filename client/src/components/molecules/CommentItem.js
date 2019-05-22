import React from 'react';
import styled from 'styled-components';

//components
import PicIcon from '../atoms/PicIcon';
import Name from '../atoms/Name';
import Post from '../atoms/Post';
import Divider from '../atoms/Divider';

const CommentItemWrapper = styled.div`
    padding: 10px;
`

const PostItem = () => {
    return (
        <CommentItemWrapper>
            <div>
                <PicIcon newht={"35px"}/>
                <Name />
            </div>
            <div>
                <Post inside={"This is a comment...This is a comment...This is a comment"}/>
                <Divider />
            </div>
        </CommentItemWrapper>
    )
}

export default PostItem;