import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { deleteApi, postApi } from "../api/utils";
export interface CounterState {
  addTodo: string[];
}

const initialState: CounterState = {
  addTodo: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, { payload }: PayloadAction<any>) => {
      const actionData = payload;
      postApi(actionData);
    },
    removeTodo: (state, { payload }: PayloadAction<string>) => {
      const todoId = payload;
      deleteApi(todoId);
    },

    getTodo: (state, { payload }: PayloadAction<any>) => {
      return {
        ...state,
        addTodo: payload,
      };
    },
  },
});

export const { addTodo, removeTodo, getTodo } = todoSlice.actions;

export default todoSlice.reducer;
