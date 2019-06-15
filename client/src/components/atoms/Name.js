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
                    {props.names? props.names.firstName : props.user.firstName}
                </span>
                <span>
                    &nbsp;
                </span>
                <span>
                    {props.names? props.names.lastName : props.user.lastName}
                </span>
            </NameWrapper>
        )
}

export default Name;