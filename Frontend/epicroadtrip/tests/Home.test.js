import {mount} from '@vue/test-utils'
import Home from '../src/views/HomePage.vue'
import { createStore } from 'vuex'
import globalstore from '../src/store/index.js'

const store = createStore({
    modules: {
        globalstore
    }
})

const wrapper = mount(Home, {
    global: {
      plugins: [store]
    }
})

describe('Testing Home page', () => {
    it('it should be a restaurant button', async () => { 
      const buttonWrapper = wrapper.find("[name='restauButton']")
      expect(buttonWrapper.exists()).toBe(true)
      expect(buttonWrapper.text()).toBe('Restaurants')
    })
    it('it should be a bar button', async () => { 
        const buttonWrapper = wrapper.find("[name='barButton']")
        expect(buttonWrapper.exists()).toBe(true)
        expect(buttonWrapper.text()).toBe('Bar')
    })
    it('it should be a gas button', async () => { 
        const buttonWrapper = wrapper.find("[name='gasButton']")
        expect(buttonWrapper.exists()).toBe(true)
        expect(buttonWrapper.text()).toBe('Gas')
    })
    it('it should be a hotel button', async () => { 
        const buttonWrapper = wrapper.find("[name='hotelButton']")
        expect(buttonWrapper.exists()).toBe(true)
        expect(buttonWrapper.text()).toBe('Hotel')
    })
    it('it should be a loc button', async () => { 
        const buttonWrapper = wrapper.find("[name='locButton']")
        expect(buttonWrapper.exists()).toBe(true)
    })
    it('it should be a event button', async () => { 
        const buttonWrapper = wrapper.find("[name='eventsButton']")
        expect(buttonWrapper.exists()).toBe(true)
        expect(buttonWrapper.text()).toBe('Event')
    })
    it('it should go in change function', async () => {
        const buttonWrapper = wrapper.find("[name='restauButton']")
        expect(buttonWrapper.exists()).toBe(true)
        const spy = vi.spyOn(wrapper.vm, 'change')
        buttonWrapper.trigger('click')
        expect(spy).toHaveBeenCalledTimes(1)
    })
    it('it should go in change function', async () => {
        const buttonWrapper = wrapper.find("[name='barButton']")
        expect(buttonWrapper.exists()).toBe(true)
        const spy = vi.spyOn(wrapper.vm, 'change')
        buttonWrapper.trigger('click')
        expect(spy).toHaveBeenCalledTimes(1)
    })    
    it('it should go in change function', async () => {
        const buttonWrapper = wrapper.find("[name='hotelButton']")
        expect(buttonWrapper.exists()).toBe(true)
        const spy = vi.spyOn(wrapper.vm, 'change')
        buttonWrapper.trigger('click')
        expect(spy).toHaveBeenCalledTimes(1)
    })    
    it('it should go in change function', async () => {
        const buttonWrapper = wrapper.find("[name='gasButton']")
        expect(buttonWrapper.exists()).toBe(true)
        const spy = vi.spyOn(wrapper.vm, 'change')
        buttonWrapper.trigger('click')
        expect(spy).toHaveBeenCalledTimes(1)
    })
    it('it should go in change function', async () => {
        const buttonWrapper = wrapper.find("[name='eventsButton']")
        expect(buttonWrapper.exists()).toBe(true)
        const spy = vi.spyOn(wrapper.vm, 'change')
        buttonWrapper.trigger('click')
        expect(spy).toHaveBeenCalledTimes(1)
    })
    // it('should verify if the button exist and the function is called', async()=>{
    //     const buttonWrapper = wrapper.find("[name='payement']")
    //     expect(buttonWrapper.exists()).toBe(true)
    //     expect(buttonWrapper.text()).toBe('Pay now')
    //     const spy = vi.spyOn(wrapper.vm, 'submit')
    //     buttonWrapper.trigger('click')
    //     expect(spy).toHaveBeenCalledTimes(1)
    //   })
})