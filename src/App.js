import React, { useState } from 'react';
import styled from 'styled-components';
import data from './data';
import List from './Components/List';
import Button from './Components/Button';




const Wrapper = styled.main`
   display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
    background-color: #FFFFFF;
    font-family: 'josefin sans' , sans-serif;
    
`

const Section = styled.section`
    width: 300px;
    height: auto;
    border-radius: 4px;
    border: none;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
    padding: 1.2rem 1.5rem;

    h3 {
      font-size: 1.2rem;
      font-weight: bold;
  }
    
   

`



const App = () => {

  const clearAll = () => {
    setPeople([])
  }
  const [ people, setPeople ] = useState(data)

    return (
      <Wrapper>
      <Section>
      <h3>{people.length} birthdays today</h3>
      <List people = {people} />
      <Button clearAll = {clearAll}> clear all </Button>
      </Section>
      </Wrapper>
    )
}


export default App;