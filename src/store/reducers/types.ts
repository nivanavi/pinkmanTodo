export interface IToDoItem {
  id: string
  title: string
  description: string
  isDone: boolean
}

export interface IAddToDoPayload {
  title: string
  description: string
  isDone?: boolean
}
export interface IAddToDoAction {
  type: EToDoActions.ADD_TODO
  payload: IAddToDoPayload
}

export interface IDeleteToDoPayload {
  id: string
}
export interface IDeleteToDoAction {
  type: EToDoActions.DELETE_TODO
  payload: IDeleteToDoPayload
}

export interface IDoneToDoPayload {
  id: string
}
export interface IDoneToDoAction {
  type: EToDoActions.DONE_TODO
  payload: IDoneToDoPayload
}

export type TToDoActions = IDeleteToDoAction | IDoneToDoAction | IAddToDoAction

export enum EToDoActions {
  ADD_TODO = "ADD_TODO",
  DELETE_TODO = "DELETE_TODO",
  DONE_TODO = "DONE_TODO"
}