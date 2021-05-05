import styled from "styled-components";

export const StyledToDoListWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  .toDoItem-exit-active {
    animation: deleteItem 0.5s forwards;
  }  
  
  .toDoItem-enter-active {
    animation: addItem 0.5s forwards;
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