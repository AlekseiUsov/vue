import { shallowMount } from "@vue/test-utils";
import task from "../../src/components/molecules/ToDoTask.vue";
import list from "../../src/components/organisms/ToDoList.vue";

describe("ToDoList.vue", () => {
    const wrapper = shallowMount(list);
    expect(wrapper).toMatchSnapshot();
})
