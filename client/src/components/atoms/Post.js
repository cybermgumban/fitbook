import React from 'react';
import {Component} from 'react';
import styled from 'styled-components';

const PostWrapper = styled.span`
    font-size: 12px;
    margin-top: 5x;
    margin-right: 5px;
    margin-bottom: 5px;
`

class Post extends Component {
    render() {

        return (
            <PostWrapper>
                {/* {this.props.inside.comment.comment} */}
            </PostWrapper>
        )
    }
}

export default Post;