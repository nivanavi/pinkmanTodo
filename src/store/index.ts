import {createStore}            from "redux";
import {rootReducer}            from "./reducers";
import {updateLocalStorageToDO} from "./reducers/reducerToDo";

export const store = createStore(rootReducer)

store.subscribe(() => {
  const {toDo} = store.getState();
  updateLocalStorageToDO(toDo)
})