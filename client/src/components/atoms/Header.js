import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
    font-family: Tahoma;
    height: 50px;
    background-color: blue;
    position: relative;
`

const InsideHeadWrapper = styled.h1`
    text-align: left;
    line-height: 50px;
    vertical-align: middle;
    margin: auto;
    color: white;
`

const Header = () => {
    return (
    <HeaderWrapper>
        <InsideHeadWrapper>&nbsp; Fitbook</InsideHeadWrapper>
    </HeaderWrapper>
    )
}

export default Header;