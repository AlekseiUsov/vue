import Vue from "vue";
import Vuex from "vuex";
import { v4 as uuidv4 } from "uuid";

Vue.use(Vuex);

export const state = {
  tasks: JSON.parse(localStorage.getItem("tasks")),
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
      return state.tasks;
    }
    else if (state.filter === "Active") {
      state.task = state.tasks.filter((task) => task.isChecked === false);
      return state.task
    }
    else if (state.filter === "Completed") {
      state.task = state.tasks.filter((task) => task.isChecked === true);
      return state.task
    }
  },
  getDoneTasks(state) {
    return (state.tasks.filter((task) => task.isChecked === true)).length;
  },
  getAllTasks(state) {
    console.log(state.tasks.length)
    return state.tasks.length;
  }
};

const store = new Vuex.Store({
  state,
  mutations,
  getters,
});

export default store;
