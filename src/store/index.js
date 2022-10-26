import Vue from 'vue';
import Vuex from 'vuex';


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
      state.tasks.push(value)
    }
  },
  actions: {},
  getters: {},

  modules: {}
})
export default store;