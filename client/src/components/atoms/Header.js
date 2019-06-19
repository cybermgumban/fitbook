import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

//components
// import Login from './Login';

const HeaderWrapper = styled.div`
    display: inline-block;
    width: 100%;
    height: 80px;
    background-color: rgb(0, 153, 51);
    justify-align: center;
`

const InsideHeadWrapper = styled.h1`
    margin-left: 20px;
    color: white;
`
const Header = (props) =>{
    return (
            <HeaderWrapper>
                <InsideHeadWrapper>
                    <Link to="/" style={{textDecoration:"none", color:"white"}}>Fitbook</Link>
                </InsideHeadWrapper>
            </HeaderWrapper>
    )
}

export default Header;