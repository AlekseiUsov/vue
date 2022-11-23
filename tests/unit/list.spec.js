import { createLocalVue, mount } from "@vue/test-utils";

import Vuex from "vuex";
import list from "../../src/components/organisms/ToDoList.vue";
import task from "../../src/components/molecules/ToDoTask.vue";
import newTask from "../../src/components/atoms/ToDoNewTask.vue";


const localVue = createLocalVue()
localVue.use(Vuex)

const getters = {
    filterTasks: () => ([{ id: 1, title: "Task 1", isChecked: false }])
}

const mutations = {
    deleteTask: () => [],
    addTask: () => [],
}

const store = new Vuex.Store({ getters, mutations })
store.commit = jest.fn()

describe("ToDoList.vue", () => {

    it("тестируем отрисовку тасок", async () => {

        const wrapper = mount(list, { store, localVue })
        await wrapper.findComponent(task).vm.$emit("changeStatus")

        expect(store.commit).toHaveBeenCalledWith(
            "changeStatusTask", 1)
    });

    it("тестируем добавление", async () => {

        const wrapper = mount(list, { store, localVue })
        await wrapper.findComponent(newTask).vm.$emit("getInputValue", 'value')

        expect(store.commit).toHaveBeenCalledWith(
            "addTask", 'value')
    });
})
