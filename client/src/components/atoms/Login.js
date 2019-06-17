import React from 'react';
import styled from 'styled-components';
import {Component} from 'react';

const LoginWrapper = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    margin-right: 20px;
    color: black;
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
            <LoginWrapper>
                <InsideHeadWrapper>{this.state.login? "Login" : "Register"}</InsideHeadWrapper>
                <form>
                    {!this.state.login? 
                    (<div>
                        <div>
                            <LabelWrapper>First Name</LabelWrapper>
                            <InputWrapper type="field"/>
                        </div>
                        <div>
                            <LabelWrapper>Last Name</LabelWrapper>
                            <InputWrapper type="field" />
                        </div>
                    </div>) : null }

                    <div>
                        <div>
                            <LabelWrapper>Email</LabelWrapper>
                            <InputWrapper type="field" />
                        </div>

                        <div>
                            <LabelWrapper>Password</LabelWrapper>
                            <InputWrapper type="field" />
                        </div>
                    </div>
                </form>
                <button>{this.state.login? "Login Account" : "Create Account"}</button>
                <button onClick={(e) => this.onClickButton(e)}>{this.state.login? "create a new account?" : "login to an existing account?"}</button>
            </LoginWrapper>
        )
    }
}

export default Login;