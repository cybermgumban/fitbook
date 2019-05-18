import React from 'react';
import styled from 'styled-components';

//components
// import Login from './Login';
import LoggedIn from './LoggedIn';

const MainWrapper = styled.div`
`

const HeaderWrapper = styled.div`
    height: 50px;
    background-color: rgb(0, 153, 51);
    position: relative;

`

const InsideHeadWrapper = styled.h1`
    text-align: left;
    line-height: 50px;
    vertical-align: middle;
    margin: auto;
    color: white;
    display: inline-block;
`

const Header = (props) =>{
    return (
        <MainWrapper>
            <HeaderWrapper>
                <InsideHeadWrapper>&nbsp; Fitbook</InsideHeadWrapper>
                <LoggedIn />
            </HeaderWrapper>
            {props.children}
        </MainWrapper>
    )
}

export default Header;