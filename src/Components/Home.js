import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
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

    h4 {
        font-size:0.9rem;
        font-weight:bold;
        margin-bottom: 2rem;
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
        <Link to='/signup' className='link'><Button primary>Get Started</Button></Link>
        <Link to='/signin' className='link'><Button>Sign In</Button></Link>
      
        

       
       </Article>
    )
}

export default Home;