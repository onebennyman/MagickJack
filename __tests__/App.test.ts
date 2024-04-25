import { mount } from '@vue/test-utils'
import App from '../src/App.vue'
import GameInstance from '../src/components/GameInstance/_GameInstance'
import { createTestingPinia } from '@pinia/testing'
const gameInstance = GameInstance

describe('When the App loads', () => {
  it('should init the game instance setting its progress init status to true', () => {
    mount(App, {
      global: {
        plugins: [createTestingPinia()]
      }
    })
    expect(gameInstance.progress.init).toEqual(true)
  })
})

describe('When the user wants to start the game', () => {
  beforeEach(() => {
    gameInstance.reset()
  })
  it('should load the main menu', () => {
    const wrapper = mount(App, {
      global: {
        plugins: [createTestingPinia({ stubActions: false })]
      }
    })
    expect(wrapper.find("[data-testid='main-menu']").exists()).toEqual(true)
  })
  it('should hide the main menu when its progress inProgress status is set to true', () => {
    gameInstance.firstStart()
    const wrapper = mount(App, {
      global: {
        plugins: [createTestingPinia({ stubActions: false })]
      }
    })
    expect(wrapper.find("[data-testid='main-menu']").classes()).toContain(
      'hidden'
    )
  })
})
