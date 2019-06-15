import React from 'react';
import {Component} from 'react';
import styled from 'styled-components';

//components
import PicIcon from '../atoms/PicIcon';
import Name from '../atoms/Name';
import Post from '../atoms/Post';
import Divider from '../atoms/Divider';

const CommentItemWrapper = styled.div`
    padding: 10px;
`

class PostItem extends Component {

    displayComments(){
        
        const comments = this.props.comments;

        return (
            comments.map ((comment, index) =>   
                <CommentItemWrapper key={index}>
                    <div>
                        <PicIcon newht={"25px"}/>
                        <Name user={comment.user}/>
                    </div>
                    <div>
                        <Post postcomment={comment}/>
                        <Divider />
                    </div>
                </CommentItemWrapper>
            )
        )
    }

    render() {
        return (
            <div>
                {this.displayComments()}
            </div>
        )
    }
}

export default PostItem;