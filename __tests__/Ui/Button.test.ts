import { mount } from '@vue/test-utils'
import Button from '../../src/components/Ui/Button.vue'

describe('MyButton', () => {
  it('should render the button with the provided message', () => {
    const msg = 'Click me'
    const wrapper = mount(Button, {
      props: {
        msg: msg
      }
    })
    expect(wrapper.text()).toContain(msg)
  })

  it('emits buttonClicked event when button is clicked', async () => {
    const msg = 'Click me'
    const wrapper = mount(Button, {
      props: {
        msg: msg
      }
    })
    await wrapper.find('button').trigger('click')
    expect(wrapper.emitted('buttonClicked')).toBeTruthy()
  })

})
