import React from 'react';
import {Component} from 'react';
import styled from 'styled-components';

//components
import PicIcon from '../atoms/PicIcon';
import NameCommentItem from '../atoms/NameCommentItem';
import PostCommentItem from '../atoms/PostCommentItem';
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
                    {/* {console.log("!@comment", comment)} */}
                    <div>
                        <PicIcon newht={"35px"}/>
                        <NameCommentItem user={comment.user}/>
                    </div>
                    <div>
                        <PostCommentItem postcomment={comment}/>
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