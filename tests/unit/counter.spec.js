import Vuex from "vuex";
import { mount, createLocalVue } from "@vue/test-utils";

import counter from "@/components/atoms/ToDoСounter.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

const store = new Vuex.Store({
  state: {
    tasks: [
      { id: 1, title: "Task 1", isChecked: true },
      { id: 2, title: "Task 2", isChecked: false },
      { id: 3, title: "Task 3", isChecked: false },
      { id: 3, title: "Task 3", isChecked: false },
    ],
  },
  filter: "active"
});

describe("counter", () => {
  it("отрисовывает counter", () => {
    const wrapper = mount(counter, {
      store,
      localVue,
    });
    console.log(wrapper.find("p").element.textContent)
    expect(wrapper.find("p").text()).toBe("3/4 left");
  });
});
