import React from 'react';
import styled from 'styled-components';
import {Component} from 'react';

import Header from '../atoms/Header'

const LoginWrapper = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    margin-right: 20px;
    color: black;
    align-items: center;
    text-align: center;
`

const InsideHeadWrapper = styled.span`
    display: flex;
    font-weight: bold;
    margin: 20px 0;
`

const InputWrapper = styled.input`
    text-align: center;
`

const ButtonWrapper = styled.button`
    margin-top: 10px;
`

const FormWrapper = styled.div`
    margin-top: 5px;
`

class Login extends Component{
    state = {
        login: true,
    }

    onClickButton(e) {
        e.preventDefault();
        this.setState({
            login: !this.state.login,
        })
    }

    render() {
        return (
            <div>
                <Header />
                <LoginWrapper>
                    <InsideHeadWrapper>{this.state.login? "Login" : "Register"}</InsideHeadWrapper>
                    <form>
                        {!this.state.login? 
                        (<div>
                            <FormWrapper>
                                <label>First Name <br/></label>
                                <InputWrapper type="field"/>
                            </FormWrapper>
                            <FormWrapper>
                                <label>Last Name <br/></label>
                                <InputWrapper type="field" />
                            </FormWrapper>
                        </div>) : null }
                        <div>
                            <FormWrapper>
                                <label>Email <br/></label>
                                <InputWrapper type="field" />
                            </FormWrapper>
                            <FormWrapper>
                                <label>Password <br/></label>
                                <InputWrapper type="field" />
                            </FormWrapper>
                        </div>
                    </form>
                    <div>
                        <ButtonWrapper>{this.state.login? "Login Account" : "Create Account"}</ButtonWrapper>
                        <ButtonWrapper onClick={(e) => this.onClickButton(e)}>{this.state.login? "create a new account?" : "login to an existing account?"}</ButtonWrapper>
                    </div>
                </LoginWrapper>
            </div>
        )
    }
}

export default Login;