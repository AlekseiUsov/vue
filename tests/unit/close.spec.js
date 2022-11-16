import { mount } from "@vue/test-utils";
import close from "../../src/components/atoms/ToDoCloseBth.vue";

describe("ToDoCloseBth.vue", () => {
  it("тестируем отрисовку компанента", async () => {
    const wrapper = mount(close);

    expect(wrapper).toMatchSnapshot();
  });

  it("тестируем кнопку закрывания", async () => {
    const wrapper = mount(close);

    await wrapper.find("span").trigger("click");
    expect(wrapper.emitted("close")).toBeTruthy();
  });
});
