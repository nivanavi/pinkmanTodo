import React                                                                     from 'react';
import {StyledDeleteButton, StyledDoneButton, StyledToDoContent, StyledToDoItem} from "./styled";
import {IToDoItemProps}                                                          from "./types";

const ToDoItem = (props: IToDoItemProps) => {
  const {item: {id, title, description, isDone}, onDelete, onDone} = props;
  return (
    <StyledToDoItem>
      <StyledDoneButton onClick={() => onDone(id)}>
        {!isDone && <><span className="indexOk">👉🏻</span><span className="ok">👌🏻</span></>}
        {isDone && <span>🖖🏻</span>}
      </StyledDoneButton>
      <StyledToDoContent>
        <h1>{title}</h1>
        <p>{description}</p>
      </StyledToDoContent>
      <StyledDeleteButton onClick={() => onDelete(id)}>
        <span className="default">😔</span>
        <span className="hover">😌</span>
      </StyledDeleteButton>
    </StyledToDoItem>

  );
};

export default ToDoItem;