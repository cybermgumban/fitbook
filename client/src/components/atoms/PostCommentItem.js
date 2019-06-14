import React from 'react';
import {Component} from 'react';
import styled from 'styled-components';

const PostWrapper = styled.span`
    font-size: 12px;
    margin-top: 5x;
    margin-right: 5px;
    margin-bottom: 5px;
`

class PostCommentItem extends Component {
    render() {
        console.log("!@comment", this.props)
        return (
            <PostWrapper>
                {this.props.postcomment.comment}
            </PostWrapper>
        )
    }
}

export default PostCommentItem;