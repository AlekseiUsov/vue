import { mount } from "@vue/test-utils";
import newTask from "../../src/components/atoms/ToDoNewTask.vue";

describe("ToDoNewTask.vue", () => {
  it("тестируем отрисовку компонента", async () => {
    const wrapper = mount(newTask);
    expect(wrapper).toMatchSnapshot();
  });

  it("тестируем отправку данных", async () => {
    const wrapper = mount(newTask);

    await wrapper.find("input").trigger("keyup.enter");
    expect(wrapper.emitted("getInputValue")).toBeTruthy();
  });

  it("тестируем очистку формы", async () => {
    const wrapper = mount(newTask);

    await wrapper.find("input").trigger("keyup.enter");
    expect(wrapper.text()).toBe('');
  });
});
