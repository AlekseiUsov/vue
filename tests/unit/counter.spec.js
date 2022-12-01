import Vuex from "vuex";

import counter from "../../src/components/atoms/ToDoСounter.vue";
import { mount, createLocalVue } from "@vue/test-utils";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Getters.vue", () => {
  let getters;
  let store;

  beforeEach(() => {
    getters = {
      getDoneTasks: () => "2",
      getAllTasks: () => "4",
    };

    store = new Vuex.Store({
      getters,
    });
  });

  it("Отображает doneTasks", () => {
    const wrapper = mount(counter, { store, localVue });
    const span = wrapper.find("span");
    expect(span.text()).toBe(getters.getDoneTasks());
  });

  it('Отображает "state.clicks" во втором теге p', () => {
    const wrapper = mount(counter, { store, localVue });
    const span = wrapper.findAll("span").at(1);
    expect(span.text()).toBe("4");
  });
});
