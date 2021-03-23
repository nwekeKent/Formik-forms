import React from 'react'
import styled from 'styled-components';

const StyledButton = styled.button`
    color: #fff;
    display: block;
    width: 100%;
    border-color: transparent;
    background-color:#f28ab2;
    margin: 2rem auto 0 auto;
    text-transform: capitalize;
    font-size: 1.2rem;
    padding: 0.5rem 0;
    letter-spacing: 0.21rem;
    border-radius: 0.25rem;
    outline: none;
    cursor: pointer;
`

const Button = ({ children, clearAll }) => {
    return (
        <StyledButton onClick={() => {clearAll()}}> {children} </StyledButton>
    )
}

export default Button

