import React from 'react';
import styled from 'styled-components';

const NameWrapper = styled.div`
    margin-left: 10px;
    font-size: 12px;
    font-weight: bold;
    display: inline-block;
`

const Name = () => {
    return (
        <NameWrapper>
            <span>
                FirstName
            </span>
            <span>
                &nbsp;
            </span>
            <span>
                LastName
            </span>
        </NameWrapper>
    )
}

export default Name;