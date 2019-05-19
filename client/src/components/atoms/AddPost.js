import React from 'react';
import {Component} from 'react';
import styled from 'styled-components';

const InputWrapper = styled.input`
    height: 30px;
    width: 50vw;
`

const ButtonWrapper = styled.button`
    margin-top: 3px;
`

class AddPost extends Component {
     render() {
        return (
            <div>
                <form>
                    <InputWrapper type="field" placeholder="What fitness task did you do today?" />
                </form>
                <ButtonWrapper>Submit</ButtonWrapper>
            </div>
        )
    }
}

export default AddPost;