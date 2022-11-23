import { createLocalVue, mount } from "@vue/test-utils";
import { state } from '../../src/store/index.js'

import Vuex from "vuex";
import tabs from "../../src/components/organisms/ToDoTabs.vue";
import tab from "../../src/components/atoms/ToDoTab.vue";


const localVue = createLocalVue()
localVue.use(Vuex)

const mutations = {
    setActiveTab: jest.fn(),
    filter: ((task) => task.isChecked != true)
}



const store = new Vuex.Store({ mutations })

describe("ToDoList.vue", () => {

    it("тестируем активные таски", async () => {

        const wrapper = mount(tabs, { store, localVue })
        await wrapper.findComponent(tab).vm.$emit("changeTab")

        expect(mutations.setActiveTab).toHaveBeenCalledWith(
            "setActiveTab", 'Active')
    });

})
