import React from 'react';
import styled from 'styled-components';
import {Component} from 'react';

const LoggedInWrapper = styled.div`
    display: flex;
    flex-direction: row;
`

const LabelWrapper = styled.p`
    margin-right: 40px;
    color: white;
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