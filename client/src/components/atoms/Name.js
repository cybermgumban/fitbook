import React from 'react';
import styled from 'styled-components';

const NameWrapper = styled.div`
    margin-left: 10px;
    font-size: 12px;
    font-weight: bold;
    display: inline-block;
`

const Name = (props) => {
        return (
            <NameWrapper>
                <span>
                    {props.names.firstName}
                </span>
                <span>
                    &nbsp;
                </span>
                <span>
                    {props.names.lastName}
                </span>
            </NameWrapper>
        )
}

export default Name;