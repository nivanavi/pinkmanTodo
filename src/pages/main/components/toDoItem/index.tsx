import React            from 'react';
import {StyledToDoItem} from "./styled";
import {IToDoItemProps} from "./types";

const ToDoItem = (props: IToDoItemProps) => {
  const {item: {id, title, description, isDone}, onDelete, onDone} = props;
  return (
    <StyledToDoItem>
      <input type="checkbox" defaultChecked={isDone} onChange={() => onDone(id)}/>
      <h1>{title}</h1>
      <p>{description}</p>
      <button onClick={() => onDelete(id)}>х</button>
    </StyledToDoItem>

  );
};

export default ToDoItem;