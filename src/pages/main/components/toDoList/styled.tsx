import styled from "styled-components";

export const StyledToDoListWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  
  .toDoItem-exit-active {
    animation: deleteItem 0.5s forwards;
  }  
  
  .toDoItem-enter-active {
    animation: addItem 0.5s forwards;
  }
  
  > div {
    width: 100%;
  }
  
  > h1 {
    text-align: center;
    font-size: 3rem;
    font-family: Verdana;
  }
  
  
  @keyframes addItem {
    0% {
      opacity: 0;
      transform: translateX(-30rem);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }  
  
  @keyframes deleteItem {
    0% {
      opacity: 1;
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      transform: translateX(30rem);
    }
  }
`;