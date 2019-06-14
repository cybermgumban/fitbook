import React from 'react';
import styled from 'styled-components';

const NameWrapper = styled.div`
    margin-left: 10px;
    font-size: 12px;
    font-weight: bold;
    display: inline-block;
`

const Name = (names) => {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         names: null
    //     }
    // }

    console.log("!@propsInName", names)
        return (
            <NameWrapper>
                <span>
                    {/* {props.names} */}
                </span>
                <span>
                    &nbsp;
                </span>
                <span>
                    {/* {props.lastName} */}
                </span>
            </NameWrapper>
        )
}

export default Name;