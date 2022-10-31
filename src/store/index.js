import Vue from 'vue';
import Vuex from 'vuex';
import { v4 as uuidv4 } from 'uuid';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
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
    filter: 'All',
  },
  mutations: {
    changeStatusTask(state, id) {
      state.tasks.map((task) => {
        if (task.id === id) {
          task.isChecked = !task.isChecked;
        }
      })
    },
    deleteTask(state, id) {
      state.tasks = state.tasks.filter((task) => task.id != id);
    },
    addTask(state, value) {
      const newTask = {
        id: uuidv4(),
        title: value,
        isChecked: false
      }
      state.tasks.push(newTask);
    },
    setActiveTab(state, tabName) {
      state.filter = tabName
    }
  },
  actions: {},
  getters: {
    filterTasks(state) {
      if (state.filter === 'All') {
        return state.tasks
      }
      if (state.filter === 'Active') {
        return state.tasks.filter((task) => task.isChecked === false)
      }
      if (state.filter === 'Completed') {
        return state.tasks.filter((task) => task.isChecked === true)
      }
    },
  },
  modules: {}
})
export default store;