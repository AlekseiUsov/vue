import { mount } from "@vue/test-utils";
import checkbox from "../../src/components/atoms/ToDoCheckbox.vue";

describe("ToDoCheckbox.vue", () => {
  it("тестируем чекбокс", async () => {
    const wrapper = mount(checkbox);
    expect(wrapper).toMatchSnapshot();
  });

  it("тестируем пропсы чекбокс", async () => {
    const wrapper = mount(checkbox, {
      propsData: {
        isChecked: true,
      },
    });
    expect(wrapper.find("input").element.checked).toBe(true);
  });

  it("тестируем клик по чекбоксу", async () => {
    const wrapper = mount(checkbox);

    await wrapper.find("input").trigger("click");
    expect(wrapper.emitted("checkCheckbox")).toBeTruthy();
  });
});
