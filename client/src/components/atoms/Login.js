import React from 'react';
import styled from 'styled-components';
import {Component} from 'react';

const LoginWrapper = styled.div`
    text-align: right;
    display: block;
    float: right;
    color: white;
`

const InsideHeadWrapper = styled.p`
    line-height: 50px;
    font-weight: bold;
    margin: auto;
    display: inline-block;
`

const Form = styled.form`
    display: inline-block;
    margin-right: 20px;
`

class Login extends Component{
    render() {
        return (
            <LoginWrapper>
                <InsideHeadWrapper>Login &nbsp;</InsideHeadWrapper>
                <Form>
                    <label>Username</label>
                    <input type="field" />

                    <label>Password</label>
                    <input type="field" />
                </Form>
            </LoginWrapper>
        )
    }
}

export default Login;