import { createLocalVue, mount } from "@vue/test-utils";

import Vuex from "vuex";
import list from "../../src/components/organisms/ToDoList.vue";
import task from "../../src/components/molecules/ToDoTask.vue";
import newTask from "../../src/components/atoms/ToDoNewTask.vue";

// const localVue = createLocalVue();
// localVue.use(Vuex);

// const getters = {
//   filterTasks: () => [{ id: 1, title: "Task 1", isChecked: false }],
// };

// const store = new Vuex.Store({ getters });
// store.commit = jest.fn();

// describe("ToDoList.vue", () => {

//   it("тестируем изменение в таске", async () => {
//     const wrapper = mount(list, { store, localVue });
//     await wrapper.findComponent(task).vm.$emit("changeStatus");

//     expect(store.commit).toHaveBeenCalledWith("changeStatusTask", 1);
//   });

//   it("тестируем удаление существующей таски", async () => {
//     const wrapper = mount(list, { store, localVue });
//     await wrapper.findComponent(newTask).vm.$emit("closeTask");

//     expect(store.commit).toHaveBeenCalledWith("deleteTask", 1);
//   });

//   it("тестируем добавление новой таски", async () => {
//     const wrapper = mount(list, { store, localVue });
//     await wrapper.findComponent(newTask).vm.$emit("getInputValue", "value");

//     expect(store.commit).toHaveBeenCalledWith("addTask", "value");
//   });
//   ТРЕТИЙ ТЕСТ НЕ РАБОТАЛ ПО ДАННОЙ СХЕМЕ И Я ВСЕ ПЕРЕПИСАЛ

// });

const localVue = createLocalVue();
localVue.use(Vuex);

const mutations = {
  changeStatusTask: jest.fn(),
  deleteTask: jest.fn(),
  addTask: jest.fn()
}

const getters = {
  filterTasks: () => [{ id: 1, title: "Task 1", isChecked: false }],
};

const store = new Vuex.Store({ mutations, getters })


describe("ToDoList.vue", () => {

  it("тестируем изменение в таске", async () => {
    const wrapper = mount(list, { store, localVue });
    await wrapper.findComponent(task).vm.$emit("changeStatus");

    expect(mutations.changeStatusTask).toHaveBeenCalledWith({}, 1);
  });

  it("тестируем удаление существующей таски", async () => {
    const wrapper = mount(list, { store, localVue });
    await wrapper.findComponent(task).vm.$emit("closeTask");

    expect(mutations.deleteTask).toHaveBeenCalledWith({}, 1);
  });

  it("тестируем добавление новой таски", async () => {
    const wrapper = mount(list, { store, localVue });
    await wrapper.findComponent(newTask).vm.$emit("getInputValue", "value");

    expect(mutations.addTask).toHaveBeenCalledWith({}, "value");
  });
});