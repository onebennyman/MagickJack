import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import Zone from '../../src/components/GameZone/Zone.vue'
import { IZone,  ZoneComponents } from '../../src/components/GameZone/interface'


describe('Zone', () => {
  describe('Zone component rendering', () => {
    test.each`
      zoneTestId                                | zoneDeclared | expected
      ${ZoneComponents[ZoneComponents.discard]} | ${true}      | ${true}
      ${ZoneComponents[ZoneComponents.discard]} | ${false}     | ${false}
      ${ZoneComponents[ZoneComponents.deck]} | ${true}      | ${true}
      ${ZoneComponents[ZoneComponents.deck]} | ${false}     | ${false}
      ${ZoneComponents[ZoneComponents.play]} | ${true}      | ${true}
      ${ZoneComponents[ZoneComponents.play]} | ${false}     | ${false}
    `(
      '$zoneTestId should render: $expected  when declared: $zoneDeclared',
      ({ zoneTestId, zoneDeclared, expected }) => {
        const zone: IZone = {
            type: 'test',
            style: {
              color: "blue",
              padding: "1px"
            },
            components: {
              [ZoneComponents[zoneTestId]]: zoneDeclared
            }
          }
        const zoneTestIdString = `[data-testid='${zoneTestId}-zone']`;

        const wrapper = mount(Zone, {
          props: {
            zone
          }
        })

        expect(
          wrapper.find(zoneTestIdString).exists()
        ).toEqual(expected)
      }
    )
  })

  it("should have the required classes", () => {
    

  const type = "test";

  const wrapper = mount(Zone, {
    props: {
      zone: {
        type,
        style: {},
        components: {}
      }
    }
  })

  expect(
    wrapper.find(`[data-testid='${type}-zone']`).classes()
  ).toContain("grow")

  })
})
