import Vue from "vue";
import Vuex from "vuex";
import { v4 as uuidv4 } from "uuid";

Vue.use(Vuex);

export const state = {
  tasks: [
    { id: 1, title: "Task 1", isChecked: false },
    { id: 2, title: "Task 2", isChecked: false },
    { id: 3, title: "Task 3", isChecked: false },
  ],
  tabs: [
    { id: 1, name: "All" },
    { id: 2, name: "Active" },
    { id: 3, name: "Completed" },
  ],
  filter: "All",
};

export const mutations = {
  changeStatusTask(state, id) {
    state.tasks.map((task) => {
      if (task.id === id) {
        task.isChecked = !task.isChecked;
      }
    });
    localStorage.setItem("tasks", JSON.stringify(state.tasks));
  },
  deleteTask(state, id) {
    state.tasks = state.tasks.filter((task) => task.id != id);
    localStorage.setItem("tasks", JSON.stringify(state.tasks));
  },
  addTask(state, value) {
    const newTask = {
      id: uuidv4(),
      title: value,
      isChecked: false,
    };
    state.tasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(state.tasks));
  },
  setActiveTab(state, tabName) {
    state.filter = tabName;
  },
};

export const getters = {
  filterTasks(state) {
    if (state.filter === "All") {
      state.tasks = JSON.parse(localStorage.getItem("tasks"));
      return state.tasks;
    }
    else if (state.filter === "Active") {
      state.task = state.tasks.filter((task) => task.isChecked === false);
      state.tasks = JSON.parse(localStorage.getItem("tasks"));
      return state.task
    }
    else if (state.filter === "Completed") {
      state.task = state.tasks.filter((task) => task.isChecked === true);
      state.tasks = JSON.parse(localStorage.getItem("tasks"));
      return state.task
    }
  }
};

const store = new Vuex.Store({
  state,
  mutations,
  getters,
});

export default store;
