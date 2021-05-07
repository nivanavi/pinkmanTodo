import React                   from 'react';
import ToDoList                from "./components/toDoList";
import AddToDo                 from "./components/addToDo";
import {StyledMainPageWrapper} from "./styles";

const MainPage = () => {
  return (
    <StyledMainPageWrapper>
      <h1>Списокъ делъ 📋</h1>
      <AddToDo/>
      <ToDoList/>
    </StyledMainPageWrapper>
  );
};

export default MainPage;