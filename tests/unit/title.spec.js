import { mount } from "@vue/test-utils";
import title from "../../src/components/atoms/ToDoTitle.vue";

describe("ToDoTitle.vue", () => {
  it("выводит корректный заголовок", () => {
    const wrapper = mount(title);
    expect(wrapper).toMatchSnapshot();
  });
});
