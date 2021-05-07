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

const defaultToDo: IToDoItem[] = [
  {id: "1", title: "Сходить за хлебом", description: "Сдачу оставить себе", isDone: false},
  {id: "2", title: "Посмотреть курс по реакт", description: "там все на буржуйском ёмаё", isDone: false},
  {id: "3", title: "Посмотреть курс по редакс", description: "че так сложно я лучше буду useState юзать (шутка)", isDone: false},
  {id: "4", title: "Посмотреть курс по тайпскрипт", description: "ой как ты заебал красным подчеркивать получай // eslint-disable-next-line", isDone: false},
]

const getDefaultToDO = (): IToDoItem[] => {
  if (!localStorage.getItem("toDoList")) return defaultToDo;
  return JSON.parse(String(localStorage.getItem("toDoList")));
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