import React from 'react';
import styled from 'styled-components';
import gym from '../Assets/gym.jpg'
import Button from './Button';




export const Article  = styled.article`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    text-align:center;
    position:relative;
    margin-bottom: 30px;
    

    h3 {
        font-size: 1.3rem;
        font-weight: 600;
       
    }

    span {
        color:#F45D01;
    }

    small {
        font-size:0.5rem;
        font-weight:400;
        margin-bottom: 2rem;
    }

    .google {
        width: 20px;
        height: auto;
    }

   


`


const Home = () => {

    return (
       <Article>
        <img src={gym} alt="gym pics"/>
        <h3>Getting that Fit summer body is way <span>easier</span> than you think </h3>
        <small> Signup only takes two minutes</small>
        <Button primary> Get Started</Button>
        <Button> Sign In</Button>

       
       </Article>
    )
}

export default Home;