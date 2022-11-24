import { createLocalVue, shallowMount } from "@vue/test-utils";

import Vuex from "vuex";
import tabs from "../../src/components/organisms/ToDoTabs.vue";
import tab from "../../src/components/atoms/ToDoTab.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

const mutations = {
    setActiveTab: jest.fn(),
};

const getters = {
    getDoneTasks: () => "2",
    getAllTasks: () => "4",
};

const store = new Vuex.Store({ mutations, getters });

describe("ToDoList.vue", () => {
    it("тестируем активные таски", async () => {
        const wrapper = shallowMount(tabs, { store, localVue });

        console.log(wrapper)
        //console.log(wrapper.findComponent(tab))
        await wrapper.findComponent(tab).vm.$emit("changeTab");

        expect(mutations.setActiveTab).toHaveBeenCalled()
    });
});
