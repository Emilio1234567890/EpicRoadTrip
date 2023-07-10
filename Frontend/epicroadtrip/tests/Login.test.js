import {mount} from '@vue/test-utils'
import {vi} from 'vitest'
import Login from '../src/views/Login.vue'
import LoginForm from '../src/components/LoginForm.vue'


const wrapper = mount(Login)
describe('Testing login page', () => {
  it('there should be titles on the page ', async () => { 
        const h1 = wrapper.find('h1')
        const h3 = wrapper.find('h3')
        expect(h1.text()).toBe('Epic Road Trip')
        expect(h3.text()).toBe('Partez le voyage en poche !')
  })
  it('it should be login button', async () => { 
    const buttonWrapper = wrapper.find("[name='loginButton']")
    expect(buttonWrapper.exists()).toBe(true)
    expect(buttonWrapper.text()).toBe('Login')
  })
  it('it should be signup button', async () => { 
    const buttonWrapper = wrapper.find("[name='signupButton']")
    expect(buttonWrapper.exists()).toBe(true)
    expect(buttonWrapper.text()).toBe('Signup')
  })
  it('it should be two input for login psw', async () => {
    const inputLogin = wrapper.find('[name="mailInput"]')
    const inputPsw = wrapper.find('[name="pswInput"]')
    expect(inputLogin.exists()).toBe(true)
    expect(inputPsw.exists()).toBe(true)
  })
  it('it should go in login function', async () => {
    const wrapperLoginForm = mount(LoginForm)
    const buttonWrapper = wrapperLoginForm.find("[name='loginButton']")
    expect(buttonWrapper.exists()).toBe(true)
    const spy = vi.spyOn(wrapperLoginForm.vm, 'login')
    buttonWrapper.trigger('click')
    expect(spy).toHaveBeenCalledTimes(1)
  })
  it('it should go in signup function', async () => {
    const wrapperLoginForm = mount(LoginForm)
    const buttonWrapper = wrapperLoginForm.find("[name='signupButton']")
    expect(buttonWrapper.exists()).toBe(true)
    const spy = vi.spyOn(wrapperLoginForm.vm, 'signup')
    buttonWrapper.trigger('click')
    expect(spy).toHaveBeenCalledTimes(1)
  })
})