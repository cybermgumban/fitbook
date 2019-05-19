import React from 'react';
import styled from 'styled-components';
import {Component} from 'react';

const LoginWrapper = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    margin-right: 20px;
`

const InsideHeadWrapper = styled.span`
    display: flex;
    font-weight: bold;
`

const LabelWrapper = styled.label`
    margin-right: 10px;
`

const InputWrapper = styled.input`
    margin-right: 10px;
`

class Login extends Component{
    render() {
        return (
            <LoginWrapper>
                <InsideHeadWrapper>Login</InsideHeadWrapper>
                <form>
                    <LabelWrapper>Username</LabelWrapper>
                    <InputWrapper type="field" />

                    <LabelWrapper>Password</LabelWrapper>
                    <InputWrapper type="field" />
                </form>
            </LoginWrapper>
        )
    }
}

export default Login;