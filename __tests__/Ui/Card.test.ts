import { mount } from '@vue/test-utils'
import Card from '../../src/components/Ui/Card.vue'
import { ICard } from '../../src/components/Ui/interface'

describe('Card', () => {
  it('should render', () => {

    const wrapper = mount(Card)
    expect(wrapper.find(`[data-testid="card"]`).exists()).toBe(true)
  })

  it('should not render any text if not given', () => {

    const wrapper = mount(Card)

    expect(wrapper.text()).toBe('')
  })
  it('should render text if given', () => {
    const msg = 'TESTING TEXT'
    const card: ICard = {
      msg
    }
    const wrapper = mount(Card, {
      props: {
        card
      }
    })
    expect(wrapper.text()).toBe(msg)
  })

  it('should have the required classes to render a card', () => {
    const classList = [
      'border-2',
      'border-solid',
      'border-white',
      'bg-slate-500',
      'h-[16vw]',
      'w-[10vw]',
      'aspect-[3/4]',
      'rounded-md'
    ]

    const wrapper = mount(Card)

    const wrapperClasses = wrapper.find(`[data-testid="card"]`).classes()

    classList.forEach(requiredClass => {
      expect(wrapperClasses).toContain(requiredClass)
    })
  })
})
