import { mount } from '@vue/test-utils'
import StartGameButton from '../../../src/components/Menu/mods/PlayButtonMenu.vue'
import { vi } from 'vitest'
import GameInstance from '../../../src/components/GameInstance/_GameInstance'
import { createTestingPinia } from '@pinia/testing'


describe('StartGameButton', () => {
  it('calls startGame method when button is clicked',  () => {
    const wrapper = mount(StartGameButton, {
        global: {
          plugins: [createTestingPinia({ stubActions: false })]
        }
      })
      const spyOnStartGame = vi.spyOn(GameInstance, 'firstStart')
     wrapper.find('button').trigger('click')
    expect(spyOnStartGame).toHaveBeenCalled()
  })

  it('renders button with "PLAY" text', () => {
    const wrapper = mount(StartGameButton, {
        global: {
          plugins: [createTestingPinia({ stubActions: false })]
        }
      })
    expect(wrapper.text()).toContain('PLAY')
  })

})
