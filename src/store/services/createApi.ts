import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import type { TodoType } from "../../types/todoTypes";
export const todoApi = createApi({
   reducerPath : "todoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://todo-typescript-c0a5c-default-rtdb.firebaseio.com/",
  }),
  endpoints: (builder) => ({
    getTodoData: builder.query<TodoType, string>({
      query: () => "todo.json",
    }),
  }),
});

export const { useGetTodoDataQuery } = todoApi;
