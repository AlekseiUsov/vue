import { mount } from "@vue/test-utils";
import tab from "../../src/components/atoms/ToDoTab.vue";

describe("ToDoTab.vue", () => {
  it("тестируем отрисовку компонента", () => {
    const wrapper = mount(tab);
    expect(wrapper).toMatchSnapshot();
  });

  it("тестируем пропсы компонента", () => {
    const wrapper = mount(tab, {
      propsData: {
        name: "First post",
        isActive: true,
      },
    });
    expect(wrapper.find("li").text()).toBe("First post");
  });

  it("тестируем кнопку закрывания", async () => {
    const wrapper = mount(tab);

    await wrapper.find("li").trigger("click");
    expect(wrapper.emitted("changeTab")).toBeTruthy();
  });
});
