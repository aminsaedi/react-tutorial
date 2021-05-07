import React from "react";
import "./Preson.css";
import styled from "styled-components";

const Person = ({ name, age, handleChange, handleDelete }) => {
  const StyledDiv = styled.div`
    width: 60%;
    margin: 2rem auto;
    padding: 2rem 0;
    border: 2px solid dodgerblue;
    :hover {
      background-color: azure;
      font-size: 2rem;
    }
  `;
  return (
    <StyledDiv onDoubleClick={handleDelete}>
      <p>
        My name is {name} and i'm {age} years old.
      </p>
      <input value={name} onChange={handleChange} />
    </StyledDiv>
  );
};

export default Person;
