import {
  EToDoActions,
  IAddToDoAction,
  IAddToDoPayload,
  IDeleteToDoAction, IDeleteToDoPayload,
  IDoneToDoAction, IDoneToDoPayload,
  IToDoItem,
  TToDoActions
} from "./types";

const {ADD_TODO, DELETE_TODO, DONE_TODO} = EToDoActions;

const defaultToDo: IToDoItem[] = [
  {id: "1", title: "kakoy to titul", description: "kakoe to opisanie", isDone: false},
  {id: "2", title: "kakoy to titul", description: "kakoe to opisanie", isDone: false},
  {id: "3", title: "kakoy to titul", description: "kakoe to opisanie", isDone: false},
  {id: "4", title: "kakoy to titul", description: "kakoe to opisanie", isDone: false},
  {id: "5", title: "kakoy to titul", description: "kakoe to opisanie", isDone: false},
]

export const reducerToDo = (state: IToDoItem[] = defaultToDo, action: TToDoActions): IToDoItem[] => {
  switch (action.type) {
    case ADD_TODO:
      const {title, description, isDone} = action.payload;
      return [...state, {id: String(Date.now()), isDone: !!isDone, title, description}];
    case DELETE_TODO:
      const {id: deleteId} = action.payload;
      return state.filter(({id}) => id !== deleteId);
    case DONE_TODO:
      const {id: doneId} = action.payload;
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