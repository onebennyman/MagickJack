import { mount } from '@vue/test-utils'
import ControlZone from '../../../src/components/GameZone/mods/ControlZone.vue'
import { vi } from 'vitest'
import GameInstance from '../../../src/components/GameInstance/GameInstance'
import { createTestingPinia } from '@pinia/testing'


describe('ControlZone', () => {

    it('should render', () => {

        const wrapper = mount(ControlZone, {
            global: {
                plugins: [createTestingPinia({ stubActions: false })]
            },
            props: {
                zone: {
                    type: 'control'
                }
            }
        })
        expect(wrapper.find('[data-testid="control-zone"]').exists()).toEqual(true)
    })




})
