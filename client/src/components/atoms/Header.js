import React from 'react';
import styled from 'styled-components';

//components
// import Login from './Login';

const InsideHeadWrapper = styled.h1`
    margin-left: 20px;
    color: white;
`

const Header = (props) =>{
    return (
            <InsideHeadWrapper>Fitbook</InsideHeadWrapper>
    )
}

export default Header;