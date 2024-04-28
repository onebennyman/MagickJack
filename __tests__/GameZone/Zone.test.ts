import { mount } from '@vue/test-utils'
import Zone from '../../src/components/GameZone/Zone.vue'
import { ZoneComponents } from '../../src/components/GameZone/interface'
import { IField } from '../../src/components/GameField/interface'

describe('Zone', () => {
  describe('Zone component rendering', () => {
    test.each`
      zoneTestId                                | zoneDeclared | expected
      ${ZoneComponents[ZoneComponents.discard]} | ${true}      | ${true}
      ${ZoneComponents[ZoneComponents.discard]} | ${false}     | ${false}
      ${ZoneComponents[ZoneComponents.deck]}    | ${true}      | ${true}
      ${ZoneComponents[ZoneComponents.deck]}    | ${false}     | ${false}
      ${ZoneComponents[ZoneComponents.play]}    | ${true}      | ${true}
      ${ZoneComponents[ZoneComponents.play]}    | ${false}     | ${false}
    `(
      '$zoneTestId should render: $expected  when declared: $zoneDeclared',
      ({ zoneTestId, zoneDeclared, expected }) => {
        const field: IField = {
          type: 'player',
          style: {
            color: 'blue',
            padding: '1px'
          },
          components: {
            [ZoneComponents[zoneTestId]]: zoneDeclared
          }
        }
        const zoneTestIdString = `[data-testid='${zoneTestId}-zone']`

        const wrapper = mount(Zone, {
          props: {
            field
          }
        })

        expect(wrapper.find(zoneTestIdString).exists()).toEqual(expected)
      }
    )
  })

  it('should have the required classes', () => {
    const classList = ['grow', 'relative']
    const type = "player"

    const field: IField = {
      type,
      style: {},
      components: {}
    }

    const wrapper = mount(Zone, {
      props: {
        field
      }
    })

    const wrapperClasses = wrapper.find(`[data-testid="${type}-zone"]`).classes()

    classList.forEach(requiredClass => {
      expect(wrapperClasses).toContain(requiredClass)
    })
  })
})
