import { mount } from "@vue/test-utils";
import Activitycard from "../src/components/Activitycard.vue";

const wrapper = mount(Activitycard, {
  propsData: {
    Addres: ["some value", "some value"],
  },
});
describe("Testing Activitycard component", () => {
  it("it should be a event on card", async () => {
    const buttonWrapper = wrapper.find("[name='Card']");
    expect(buttonWrapper.exists()).toBe(true);
  });
  it('it should go in loc function', async () => {
    const buttonWrapper = wrapper.find("[name='Card']")
    expect(buttonWrapper.exists()).toBe(true)
    const spy = vi.spyOn(wrapper.vm, 'loc')
    expect(spy).toHaveBeenCalledTimes(0)
})
});
