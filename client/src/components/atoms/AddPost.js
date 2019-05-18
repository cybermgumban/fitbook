import React from 'react';
import {Component} from 'react';
import styled from 'styled-components';

const FormWrapper = styled.div`
    text-align: center;
    margin-top: 20px;
`

const InputWrapper = styled.input`
    height: 30px;
    width: 80vw;
    margin: auto;
    margin-bottom: 5px;
`

const ButtonWrapper = styled.button`
`

class AddPost extends Component {
     render() {
        return (
            <FormWrapper>
                <form>
                    <InputWrapper type="field" placeholder="What fitness task did you do today?" />
                </form>
                <ButtonWrapper>Submit</ButtonWrapper>
            </FormWrapper>
        )
    }
}

export default AddPost;