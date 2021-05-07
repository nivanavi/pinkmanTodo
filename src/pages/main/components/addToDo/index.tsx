import React                                                                        from 'react';
import {useForm}                                                                                         from "react-hook-form";
import {StyledAddToDo, StyledAddToDoButton, StyledAddToDoButtonWrapper, StyledErrorMessage, StyledField} from "./styled";
import {useDispatch}                                                                                     from "react-redux";
import {actionAddToDo}                                                              from "../../../../store/reducers/reducerToDo";
import {IAddToDoForm}                                                               from "./types";

const AddToDo = () => {
  const {register, handleSubmit, formState: {errors}} = useForm<IAddToDoForm>({mode: "onBlur"});
  const dispatch = useDispatch();

  const onSubmit = (data: IAddToDoForm) => {
    dispatch(actionAddToDo({...data}));
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <StyledAddToDo>
        <StyledField>
          <input placeholder="Задача" {...register("title", {required: "Надо бы заполнить"})} />
          {errors.title && <StyledErrorMessage>{errors.title.message}</StyledErrorMessage>}
        </StyledField>
        <StyledField>
          <input placeholder="Пару слов туда сюда сделай" {...register("description", {required: "Надо бы заполнить"})} />
          {errors.description && <StyledErrorMessage>{errors.description.message}</StyledErrorMessage>}
        </StyledField>
      </StyledAddToDo>
      <StyledAddToDoButtonWrapper>
      <StyledAddToDoButton type="submit">
        <div className="moon">
          <span>🌑</span>
        </div>
        <span className="earth">🌎</span>
      </StyledAddToDoButton>
      </StyledAddToDoButtonWrapper>
    </form>

  );
};

export default AddToDo;