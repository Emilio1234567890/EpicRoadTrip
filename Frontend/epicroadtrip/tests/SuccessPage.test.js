import {mount} from '@vue/test-utils'
import SuccesPage from '../src/components/SuccessPage.vue'
import { createMemoryHistory } from 'history';


describe("Testing SuccesPage component", () => {
    const history = createMemoryHistory();
    const wrapper = mount(SuccesPage,{
        props: {
            history: history
          }
    })
    it("it should be the right text ", async () => {
      const h1 = wrapper.find('h1');
      expect(h1.exists()).toBe(true);
      expect(h1.text()).toBe('Payement successful')
    });

    it("should redirect to the home page", async ()=>{
        await wrapper.find("[id= 'home']").trigger('click')
        expect(history.location.pathname).toBe('/');
    })
    
  });