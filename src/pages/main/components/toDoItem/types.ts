import {IToDoItem} from "../../../../store/reducers/types";

export interface IToDoItemProps {
  item: IToDoItem
  onDone: (id: string) => void
  onDelete: (is: string) => void
}