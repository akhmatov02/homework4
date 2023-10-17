import React from "react";
import styled from "styled-components";
import Peoples from "./Peoples";
const Array = () => {
  const changeAlert = (id) => {
    alert(` Сиз баскан картичканын ID си: ${id}`);
  };
  return (
    <Container>
      {Peoples.map((people) => (
        <StyleContainer key={people.id} onClick={() => changeAlert(people.id)}>
          <img src={people.image} alt="" />
          <h1>{people.firstName}</h1>
          <h3>{people.gender}</h3>
          <h3>{people.carModel}</h3>
          <p>_ {people.email}</p>
        </StyleContainer>
      ))}
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  gap: 2rem;
  flex-wrap: wrap;
  background-color: #072e33;

`;
const StyleContainer = styled.div`
  font-family: Gelasio;
  width: 230px;
  height: 330px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background: #384358;
  color: #fbe4d8;
  cursor: pointer;
  transition: transform 0.2s ease; 
  &:hover {
    transform: scale(1.05); 
  }
  &:active {
    transform: scale(0.95); 
  }
`;

export default Array;
