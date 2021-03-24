import React, { useState } from 'react';
import styled from 'styled-components';
import Home from './Components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';





const Wrapper = styled.main`
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
    background-color: #FFFFFF;
    font-family: 'montserrat' , sans-serif;
    
    
`

const Section = styled.section`
    width: 280px;
    height: auto;
    border-radius: 15px;
    border: none;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
    padding: 1.2rem 1.5rem;
    position: relative;

    div {
        width: 40%;
        margin: 0 auto;
        height: 4px;
        position: absolute;
        border-radius:10px;
        bottom: 10px;
        left: 50%;
        transform: translate(-50%,-50%);
        background-color:#E0E0E0;
    }

`



const App = () => {
      return (
      <Wrapper>
          <Section>
              <SignUp />
              <div></div>
          </Section>
      </Wrapper>
      )
 
}


export default App;