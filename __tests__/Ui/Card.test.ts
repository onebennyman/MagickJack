import { mount } from '@vue/test-utils'
import Card from '../../src/components/Ui/Card.vue'
import { ICard } from '../../src/components/Ui/interface'
import { Card as _Card } from "../../src/components/Card/Card"

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

  it("should set the information of the card instanced for rendering", () => {
    const suit = 'Diamonds';
    const value = "A"
    const card = new _Card({ suit, value })

    const wrapper = mount(Card, {
      props: {
        card
      }
    })
    expect((wrapper.vm as any).c.title).toBe(value)
    expect((wrapper.vm as any).c.subTitle).toBe(suit)
  })

  it("should render the information on the right direction, first value then suit", () => {
    const suit = 'Diamonds';
    const value = "A"
    const card = new _Card({ suit, value })

    const wrapper = mount(Card, {
      props: {
        card
      }
    })
    expect(wrapper.text()).toBe(value + suit)
  })

  it("should set the card information empty when the card status is undefined (not yet set)", () => {
    const card = new _Card()

    const wrapper = mount(Card, {
      props: {
        card
      }
    })
    expect((wrapper.vm as any).c.title).toBe("")
    expect((wrapper.vm as any).c.subTitle).toBe("")
    expect(wrapper.text()).toBe("")
  })
})
