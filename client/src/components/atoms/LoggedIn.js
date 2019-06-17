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
    display: flex;
    flex-direction: row;
    align-self: center;
    justify-content: right;
`

const LabelWrapper = styled.p`
    margin-right: 40px;
    color: white;
`

class LoggedIn extends Component{
    render () {
        return (
            <LoggedInWrapper>
                <InnerWrapper>
                    <LabelWrapper>Logout</LabelWrapper>
                </InnerWrapper>
            </LoggedInWrapper>
        )
    }
}

export default LoggedIn;