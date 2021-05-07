import styled from "styled-components";

export const StyledToDoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0px 1px 10px rgba(0, 61, 129, 0.1);
`;

export const StyledDeleteButton = styled.button`
  .default, .hover {
    transition: transform 0.5s;
    position: absolute;
  }

  .hover {
    opacity: 0;
  }
  
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  min-width: 7rem;
  height: 4rem;
  border: unset;
  background: unset;
  padding: 0.5rem;

  :hover .default {
    animation: hide 0.5s forwards;
  }

  :hover .hover {
    animation: show 0.5s forwards;
  }
  
  @keyframes show {
    0% {
      opacity: 0;
      transform: rotateY(180deg);
    }
    50% {
      opacity: 0;
    }
    51% {
      opacity: 1;
      transform: rotateY(90deg);
    }
    100% {
      opacity: 1;
      transform: rotateY(0deg);
    }
  }

  @keyframes hide {
    0% {
      opacity: 1;
      transform: rotateY(0deg);
    }
    50% {
      opacity: 1;
      transform: rotateY(90deg);
    }
    51% {
      opacity: 0;
    }
    100% {
      opacity: 0;
      transform: rotateY(180deg);
    }
  }
`;

export const StyledDoneButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  min-width: 7rem;
  height: 4rem;
  border: unset;
  background: unset;
  padding: 0.5rem;

  :hover .indexOk {
    animation: fuck 0.5s infinite;
  }
  
  .indexOk {
    padding-top: 0.9rem;
  }
  @keyframes fuck {
    0% {
      transform: translateX(0px);
    }
    50% {
      transform: translateX(2rem);
    }
    100% {
      transform: translateX(0px);
    }
  }
`;

export const StyledToDoContent = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 6rem);
  padding: 0 3rem;
  font-family: Verdana;
  
  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.5rem;
  }
`;