import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import GameInstance from '../../src/components/GameInstance/_GameInstance'
import GameField from '../../src/components/GameField/GameField.vue'
import { ZoneComponents } from '../../src/components/GameZone/interface'

describe('GameField', () => {
  beforeEach(() => {
    GameInstance.reset()
    GameInstance.progress.inProgress = true
  })
  it('should render the player zone', () => {
    const wrapper = mount(GameField, {
      global: {
        plugins: [createTestingPinia({ stubActions: false })]
      }
    })
    expect(wrapper.find("[data-testid='player-zone']").exists()).toEqual(true)
  })
  it('should render the enemy zone', () => {
    const wrapper = mount(GameField, {
      global: {
        plugins: [createTestingPinia({ stubActions: false })]
      }
    })
    expect(wrapper.find("[data-testid='enemy-zone']").exists()).toEqual(true)
  })

  const minCommonComponents = [
    ZoneComponents[ZoneComponents.discard],
    ZoneComponents[ZoneComponents.deck],
    ZoneComponents[ZoneComponents.play]
  ]

  it(`should render the ${minCommonComponents.join(
    ', '
  )} inside the player and enemy zone`, () => {
    const wrapper = mount(GameField, {
      global: {
        plugins: [createTestingPinia({ stubActions: false })]
      }
    })

    for (const component of minCommonComponents) {
      expect(
        wrapper
          .get("[data-testid='player-zone']")
          .findAll(`[data-testid='${component}-zone']`)
      ).toHaveLength(1)
      expect(
        wrapper
          .get("[data-testid='enemy-zone']")
          .findAll(`[data-testid='${component}-zone']`)
      ).toHaveLength(1)
    }
  })
})
