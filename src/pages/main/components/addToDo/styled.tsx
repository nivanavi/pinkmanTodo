import styled from "styled-components";
import React  from "react";

export const StyledAddToDo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 3rem;
  margin-bottom: 3rem;
`;

export const StyledErrorMessage = styled.div`
  font-size: 1.2rem;
  color: red;
  font-family: Verdana;
  position: absolute;
  bottom: -1.7rem;
`;
export const StyledField = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  > input {
    font-family: Verdana;
    border: unset;
    height: 5rem;
    font-size: 2.5rem;
    border-bottom: 2px solid purple;
  }
`;

export const StyledAddToDoButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 4rem;
    border: unset;
    background: unset;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    padding-bottom: 0.6rem;
  
  :hover .moon {
    animation: spin 3s infinite forwards;
  }
  .moon {
    width: 8rem;
    height: 8rem;
    font-size: 2rem;
    position: absolute;
    border-radius: 50%;
  }  
  .moon > span {
    position: absolute;
    top:  -1rem;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const StyledAddToDoButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
  margin-top: 5rem;
`;