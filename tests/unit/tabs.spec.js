import { createLocalVue, shallowMount } from "@vue/test-utils";

import Vuex from "vuex";
import tabs from "../../src/components/organisms/ToDoTabs.vue";
import tab from "../../src/components/atoms/ToDoTab.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

const mutations = {
    setActiveTab: jest.fn(),
};

const state = {
    tabs: [
        { id: 1, name: "All" },
        { id: 2, name: "Active" },
        { id: 3, name: "Completed" },
    ],
    filter: "Active",
};


const store = new Vuex.Store({ state, mutations });

describe("ToDoList.vue", () => {
    it("тестируем активные таски", async () => {
        const wrapper = shallowMount(tabs, { store, localVue });
        await wrapper.findComponent(tab).vm.$emit("changeTab");

        expect(mutations.setActiveTab).toHaveBeenCalledWith(state, 'All')
    });

    it("тестируем активную таску", async () => {
        const wrapper = shallowMount(tabs, { store, localVue });
        const isActiveTabs = wrapper.findAllComponents(tab).filter(component => {
            return component.props().isActive
        })

        expect(isActiveTabs.length).toBe(1)
    });

    it("тестируем правильное кол-во табов", async () => {
        const wrapper = shallowMount(tabs, { store, localVue });
        const allTabsLength = wrapper.findAllComponents(tab).length;
        expect(allTabsLength).toBe(3)
    });
});
