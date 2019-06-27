import React from 'react';
import styled from 'styled-components';
import {Component} from 'react';
import {graphql, compose} from 'react-apollo';
import { getUsersQuery, addUserMutation } from '../../queries/queries';
import PasswordMask from 'react-password-mask';
// import jwt from 'jsonwebtoken';

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
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        error: false,
        errorMessage: "",
    }

    onClickButton(e) {
        e.preventDefault();
        this.setState({
            login: !this.state.login,
            error: true,
            errorMessage: "",
        }, () => null)
    }

    submitCreateAccountForm = (e) => {
        const regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const today = new Date();
        e.preventDefault();

        if(!this.state.login && this.state.firstName && this.state.lastName && this.state.email && this.state.password) {
            if (this.props.getUsersQuery.users.find((users) => users.email === this.state.email)) {
                this.setState ({
                    error: true,
                    errorMessage: "User already exists!"
                })
            } 
            else if (regex.test(this.state.email) === false) {
                this.setState ({
                    error: true,
                    errorMessage: "Invalid Email Address!"
                })
            }
            else { 
                this.props.addUserMutation({
                    variables: {
                        email: this.state.email.trim(),
                        password: this.state.password.trim(),
                        dateRegistered: today.getDate() + "/" + today.getMonth() + "/" + today.getFullYear(),
                        firstName: this.state.firstName.trim(),
                        lastName: this.state.lastName.trim(),
                    }
                })
                this.setState ({
                    login: true,
                    email: "",
                    password: "",
                })
                window.location.reload()
            }
        } 
        if(this.state.login && this.state.email && this.state.password) {
            if (this.props.getUsersQuery.users !== undefined) {
                if (this.props.getUsersQuery.users.find((users) => users.email === this.state.email)) {
                    const user = this.props.getUsersQuery.users.find((users) => users.email === this.state.email)
                    if( user.password === this.state.password) {
                        this.props.pagechange(user.id, user.friendlists);
                    } else {
                        this.setState ({
                            error: true,
                            errorMessage: "Incorrect Password..."
                        })
                    }
                    // const token = jwt.sign({email: this.state.email, password: this.state.password}, "mysecret", {expiresIn: "1h"})
                } else {
                    this.setState ({
                        error: true,
                        errorMessage: "Incorrect Username..."
                    })
                }
            }
        }
    }

    render() {
        return (
            <div>
                <Header />
                <LoginWrapper>
                    <InsideHeadWrapper>{this.state.login? "Login" : "Register"}</InsideHeadWrapper>
                    <form>
                        {this.state.error? <span style={{color:"red"}}>{this.state.errorMessage}</span> : null}
                        {!this.state.login? 
                        (<div>
                            <FormWrapper>
                                <label>First Name <br/></label>
                                <InputWrapper 
                                    value={this.state.firstName}
                                    onChange={(e)=> this.setState ({ firstName: e.target.value })}
                                    type="field"/>
                            </FormWrapper>
                            <FormWrapper>
                                <label>Last Name <br/></label>
                                <InputWrapper 
                                    value={this.state.lastName}
                                    onChange={(e)=> this.setState ({ lastName: e.target.value })}
                                    type="field" />
                            </FormWrapper>
                        </div>) : null }
                        <div>
                            <FormWrapper>
                                <label>Email <br/></label>
                                <InputWrapper 
                                    value={this.state.email}
                                    onChange={(e)=> this.setState ({ email: e.target.value })}
                                    type="field" />
                            </FormWrapper>
                            <FormWrapper>
                                <label>Password <br/></label>
                                <PasswordMask
                                    inputStyles={{textAlign:"center"}}
                                    buttonStyles={{display:"none"}}
                                    value={this.state.password}
                                    onChange={(e)=> this.setState ({ password: e.target.value })}/>
                            </FormWrapper>
                        </div>
                    </form>
                    <div>
                        <ButtonWrapper onClick={this.submitCreateAccountForm}>{this.state.login? "Login Account" : "Create Account"}</ButtonWrapper>
                        <ButtonWrapper onClick={(e) => this.onClickButton(e)}>{this.state.login? "create a new account?" : "login to an existing account?"}</ButtonWrapper>
                    </div>
                </LoginWrapper>
            </div>
        )
    }
}

export default compose(
    graphql(getUsersQuery, {name: "getUsersQuery"}),
    graphql(addUserMutation, {name: "addUserMutation"})
)(Login);