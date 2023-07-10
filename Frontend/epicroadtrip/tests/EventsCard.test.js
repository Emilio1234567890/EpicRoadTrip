import {mount} from '@vue/test-utils'
import EventsCard from '../src/components/EventsCard.vue'

const wrapper = mount(EventsCard,
  {
    propsData: {
      labels: ["some value", "some value"],
    },
  }
  
  );
describe("Testing EventsCard component", () => {
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