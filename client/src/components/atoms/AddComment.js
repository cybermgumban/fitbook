import React from 'react';
import {Component} from 'react';
import styled from 'styled-components';
import {graphql, compose} from 'react-apollo';
import { getPostsQuery, addPostCommentMutation } from '../../queries/queries';

const CommentWrapper = styled.form`
    margin-top: 10px;
    font-size: 12px;
`

const LabelWrapper = styled.label`
    display: block;
`

const InputWrapper = styled.input`
    width: 700px;
    height: 30px;
    display: block;
    //resize: vertical;
`

class AddComment extends Component{
    constructor(props) {
        super(props);
        this.state = {
            newcomment: '',
        }
    }

    buttonClick(e) {
        const today = new Date();
        e.preventDefault(); 
        this.props.addPostCommentMutation({
            variables: {
                postID: this.props.post.id,
                userID: this.props.post.user.id,
                dateComment: today.getDate() + "/" + today.getMonth() + "/" + today.getFullYear(),
                comment: this.state.newcomment
            },
            refetchQueries: [{
                query: getPostsQuery
            }]
        })
        this.setState ({
            newcomment: '',
        })
    }

    render() {
        console.log("!@props", this.props.post.user.id)
        return (
            <div>
                <CommentWrapper onSubmit={(e) => e.preventDefault()}>
                    <LabelWrapper>Comment</LabelWrapper>
                    <InputWrapper 
                    value={this.state.newcomment}
                    onChange={(e) => this.setState ({newcomment: e.target.value})}
                    placeholder="Enter comment here..."></InputWrapper>
                </CommentWrapper>
                <button onClick={(e) => this.buttonClick(e)}>Submit</button>
            </div>
        )
    }
}

export default compose(
    graphql(addPostCommentMutation, {name: "addPostCommentMutation"})
)(AddComment);