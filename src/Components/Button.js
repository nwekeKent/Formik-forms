import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    width: 100%;
    outline: none;
    border: none;
    border-radius: 4px;
    padding: .5em 1.5em;
    background-color: ${props => props.primary ? "#070707" : "#E0E0E0"};
    color:${props => props.primary ? "#f5f5f5" : "#070707"};
    font-size:0.7em;
    font-family: 'montserrat',sans-serif;
    margin-bottom: 10px;
    font-weight: bold;
    letter-spacing: 1.2px;
    transition: all .5s ease-in;


    &:focus {
        outline:none;
        border:none;
    }

    &:hover {
        letter-spacing: 2.3px;
    }

`

const Button = ({primary , children}) => {
    return (
        <StyledButton primary = {primary}> {children} </StyledButton>
    )
}

export default Button;