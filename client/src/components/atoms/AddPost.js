import React from 'react';
import {Component} from 'react';
import styled from 'styled-components';
import {graphql, compose} from 'react-apollo';
import { addPostMutation } from '../../queries/queries';

const InputWrapper = styled.input`
    height: 30px;
    width: 50vw;
`

const ButtonWrapper = styled.button`
    margin-top: 3px;
`

class AddPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
        userID: '',
        datePublished: '',
        newpost: '',
        }
    }

    submitForm(e) {
        const today = new Date();
        e.preventDefault(); 
        this.props.addPostMutation({
            variables: {
                userID: "5d0260709f41ac159cc20e07",
                datePublished: today.getDate() + "/" + today.getMonth() + "/" + today.getFullYear(),
                content: this.state.newpost
            }
        })
    }

     render() {

        return (
            <div>
                <form onSubmit={(e) => this.submitForm(e)}>
                    <InputWrapper 
                    onChange={(e) => this.setState ({newpost: e.target.value})}
                    placeholder="What fitness task did you do today?" />
                </form>
                <ButtonWrapper onClick={(e) => this.submitForm(e)}>Submit</ButtonWrapper>
            </div>
        )
    }
}

export default compose(
    graphql(addPostMutation, {name: "addPostMutation"})
)(AddPost);