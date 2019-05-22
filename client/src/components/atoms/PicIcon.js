import React from 'react';
import {Component} from 'react';
import styled from 'styled-components';

//components
import imgplaceholder from '../../assets/imgplaceholder.png';

const DivWrapper = styled.div`
    display: inline-block;
    vertical-align: middle;
`

const PicIconWrapper = styled.img`
    width: auto;
    border: 1px solid rgb(192,192,192);
    border-radius: 50%;
`

class PicIcon extends Component{
    render() {
        return (
            <DivWrapper>
                <PicIconWrapper height={this.props.newht}src={imgplaceholder}/>
            </DivWrapper>
        )
    }
}

export default PicIcon;