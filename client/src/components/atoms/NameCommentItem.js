import React from 'react';
import styled from 'styled-components';

const NameWrapper = styled.div`
    margin-left: 10px;
    font-size: 12px;
    font-weight: bold;
    display: inline-block;
`

const NameCommentItem = (props) => {
        return (
            <NameWrapper>
                <span>
                    {props.user.firstName}
                </span>
                <span>
                    &nbsp;
                </span>
                <span>
                    {props.user.lastName}
                </span>
            </NameWrapper>
        )
}

export default NameCommentItem;