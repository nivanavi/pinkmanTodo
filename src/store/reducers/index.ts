import {combineReducers} from "redux";
import {reducerToDo}     from "./reducerToDo";

export const rootReducer = combineReducers({
  toDo: reducerToDo
});

export type RootState = ReturnType<typeof rootReducer>