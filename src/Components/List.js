import React from 'react'
import styled from 'styled-components';


const Person = styled.article`
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 0.75rem;
    margin-bottom: 1.2rem;
    align-items: center;
    font-family:'josefin sans', sans-serif;

    img {
        width: 75px;
        height: 75px;
        object-fit: cover;
        border-radius: 50%;
        box-shadow:  0 5px 15px rgba(0, 0, 0, 0.1);
    }

    h4 {
        margin-bottom: 0.25rem;
        font-size: 1.1em;
        font-weight: bold;
    }

    p {
        margin-bottom: 0;
        font-size: 0.9em;
    }
`
const List = ({people}) => {
    return (
    <>
    {people.map((person) => {
      const { id, name, age, image } = person;
      return (
        <Person key={id}>
          <img src={image} alt={name} />
          <div>
            <h4>{name}</h4>
            <p>{age} years</p>
          </div>
        </Person>
      );
    })}
  </>
  )
}


export default List