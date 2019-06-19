import React from 'react';
import styled from 'styled-components';
import {Component} from 'react';

const LoggedInWrapper = styled.div`
    display: inline-block;
    width: 100%;
    height: 80px;
    background-color: rgb(0, 153, 51);
`

const InnerWrapper = styled.div`
    display: block;
    text-align: right;
    margin-top: 30px;
    color: white;
`

const ButtonWrapper = styled.button`
    all: unset;
    margin-right: 40px;
    color: white;
    :hover {
        cursor: pointer;
    }
`

class LoggedIn extends Component{
    render () {
        return (
            <LoggedInWrapper>
                <InnerWrapper>
                        <ButtonWrapper onClick={() => window.location.reload()}>Logout</ButtonWrapper>
                </InnerWrapper>
            </LoggedInWrapper>
        )
    }
}

export default LoggedIn;