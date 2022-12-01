import { mount } from "@vue/test-utils";
import checkbox from "../../src/components/atoms/ToDoCheckbox.vue";
import close from "../../src/components/atoms/ToDoCloseBth.vue";
import task from "../../src/components/molecules/ToDoTask.vue";

describe("ToDoTask.vue", () => {
  it("тестируем чекбокс", async () => {
    const wrapper = mount(task);
    expect(wrapper).toMatchSnapshot();
  });

  it("тестируем пропсы task", async () => {
    const wrapper = mount(task, {
      propsData: {
        title: "String",
        isChecked: true,
      },
    });
    expect(wrapper.find("li").text()).toBe("String");
    expect(wrapper.findComponent(checkbox).props().isChecked).toBe(true);
  });

  it("тестируем клик по чекбоксу в таске", async () => {
    const wrapper = mount(task);

    await wrapper.findComponent(checkbox).vm.$emit("checkCheckbox");
    expect(wrapper.emitted("changeStatus")).toBeTruthy();
  });

  it("тестируем клик по кнопке close в таске", async () => {
    const wrapper = mount(task);

    await wrapper.findComponent(close).vm.$emit("close");
    expect(wrapper.emitted("closeTask")).toBeTruthy();
  });
});
