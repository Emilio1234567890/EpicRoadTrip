import { mount } from "@vue/test-utils";
import TravelSettings from "../src/components/TravelSettings.vue";
const wrapper = mount(TravelSettings);
describe("Testing TravelSettings component", () => {
  it("it should be a restaurant button", async () => {
    const buttonWrapper = wrapper.find("[name='logoutButton']");
    expect(buttonWrapper.exists()).toBe(true);
  });
  it("it should be a add button", async () => {
    const buttonWrapper = wrapper.find("[name='addButton']");
    expect(buttonWrapper.exists()).toBe(true);
  });

  it("there should be titles on the component ", async () => {
    const h1 = wrapper.find("h1");
    expect(h1.text()).toBe("Epic Road Trip");
  });
  it('displays the loader when input is being loaded', async () => {
    await wrapper.find('.input').setValue('New York')
    expect(wrapper.find('.loader').isVisible()).toBe(true)
  })
});
