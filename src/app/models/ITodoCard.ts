import { ITodo } from "./ITodo";

export interface ITodoCard {
  id: number,
  title: string,
  todos: ITodo[],
}