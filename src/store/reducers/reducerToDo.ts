import {
  EToDoActions,
  IAddToDoAction,
  IAddToDoPayload,
  IDeleteToDoAction, IDeleteToDoPayload,
  IDoneToDoAction, IDoneToDoPayload,
  IToDoItem,
  TToDoActions
}              from "./types";

const {ADD_TODO, DELETE_TODO, DONE_TODO} = EToDoActions;

const getDefaultToDO = (): IToDoItem[] => {
  return JSON.parse(localStorage.getItem("toDoList") || "[]");
}

export const updateLocalStorageToDO = (items: IToDoItem[]): void => {
  localStorage.setItem("toDoList", JSON.stringify(items));
}

export const reducerToDo = (state: IToDoItem[] = getDefaultToDO(), action: TToDoActions): IToDoItem[] => {
  switch (action.type) {
    case ADD_TODO:
      const {title, description} = action.payload;
      updateLocalStorageToDO([...state, {id: String(Date.now()), isDone: false, title, description}])
      return [...state, {id: String(Date.now()), isDone: false, title, description}];
    case DELETE_TODO:
      const {id: deleteId} = action.payload;
      updateLocalStorageToDO(state.filter(({id}) => id !== deleteId))
      return state.filter(({id}) => id !== deleteId);
    case DONE_TODO:
      const {id: doneId} = action.payload;
      updateLocalStorageToDO(state.map(item => {
        const {id: itemId, isDone} = item;
        if (itemId === doneId) return {...item, isDone: !isDone};
        return item;
      }))
      return state.map(item => {
        const {id: itemId, isDone} = item;
        if (itemId === doneId) return {...item, isDone: !isDone};
        return item;
      })
    default:
      return state;
  }
};

export const actionAddToDo = (payload: IAddToDoPayload): IAddToDoAction => ({type: ADD_TODO, payload});
export const actionDeleteToDo = (payload: IDeleteToDoPayload): IDeleteToDoAction => ({type: DELETE_TODO, payload});
export const actionDoneToDo = (payload: IDoneToDoPayload): IDoneToDoAction => ({type: DONE_TODO, payload});