import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  filter: "all",
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setTasks(state, action) {
      state.tasks = action.payload;
    },
    addTask(state, action) {
      state.tasks.unshift(action.payload);
    },
    toggleTask(state, action) {
      const task = state.tasks.find((t) => t.id === action.payload);
      if (task) task.completed = !task.completed;
    },
    removeTask(state, action) {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload);
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { setTasks, addTask, toggleTask, removeTask, setFilter } =
  tasksSlice.actions;
export default tasksSlice.reducer;
