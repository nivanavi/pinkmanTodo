import React                            from 'react';
import ToDoItem                         from "../toDoItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {StyledToDoListWrapper}          from "./styled";
import {useDispatch}       from "react-redux";
import {useTypedSelector}                 from "../../../../hooks/useTypedSelector";
import {actionDeleteToDo, actionDoneToDo} from "../../../../store/reducers/reducerToDo";

const ToDoList: React.FC = () => {
  const dispatch = useDispatch();
  const toDoList = useTypedSelector(state => state.toDo)

  const onDoneHandler = (id: string) => dispatch(actionDoneToDo({id}))
  const onDeleteHandler = (id: string) => dispatch(actionDeleteToDo({id}))

  return (
    <StyledToDoListWrapper>
      <TransitionGroup component="div">
        {toDoList.map(item =>
          <CSSTransition
            key={item.id}
            timeout={500}
            classNames="toDoItem"
          >
            <ToDoItem item={item} onDone={onDoneHandler} onDelete={onDeleteHandler}/>
          </CSSTransition>
        )}
      </TransitionGroup>
    </StyledToDoListWrapper>
  );
};

export default ToDoList;