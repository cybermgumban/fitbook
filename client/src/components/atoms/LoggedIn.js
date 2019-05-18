import React from 'react';
import styled from 'styled-components';
import {Component} from 'react';

const LoggedInWrapper = styled.div`
    display: block;
    float: right;
    color: white;
`

const LabelWrapper = styled.p`
    line-height: 50px;
    font-weight: bold;
    margin: auto;
    margin-right: 20px;
    display: inline-block;
`

class LoggedIn extends Component{
    render () {
        return (
            <LoggedInWrapper>
                <LabelWrapper>Home</LabelWrapper>
                <LabelWrapper>Options</LabelWrapper>
                <LabelWrapper>Logout</LabelWrapper>
            </LoggedInWrapper>
        )
    }
}

export default LoggedIn;