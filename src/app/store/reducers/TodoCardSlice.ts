import { ActionTypes } from "@mui/base";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodoCard } from "../../models/ITodoCard";

interface TodoCardState {
  cards: ITodoCard[];
  isLoading: boolean;
  error: string;
}

const initialState: TodoCardState = {
  cards: [],
  isLoading: false,
  error: ''
}

export const TodoCardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    yakovRak(state, action: PayloadAction<string>) {
      console.log(action)
      for (let i = 0; i < 10; i++) {
        state.cards[i] = {
          id: i + 1,
          title: `yakov ${action.payload}`,
          todos: [{
            title: `Гига ${action.payload}`,
            completed: i % 3 === 0 ? true : false
          }]
        }
      }
    },
    drive(state, action: PayloadAction<string>) {
      console.log(action)
    }
  }
})

export default TodoCardSlice.reducer;