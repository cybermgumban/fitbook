import React from 'react';
import styled from 'styled-components';

//components
// import Login from './Login';

const HeaderWrapper = styled.div`
    height: 80px;
    background-color: rgb(0, 153, 51);
`

const InsideHeadWrapper = styled.h1`
    margin-left: 20px;
    color: white;
`
const Header = (props) =>{
    return (
            <HeaderWrapper>
                <InsideHeadWrapper>Fitbook</InsideHeadWrapper>
            </HeaderWrapper>
    )
}

export default Header;