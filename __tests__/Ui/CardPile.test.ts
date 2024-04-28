import { mount } from '@vue/test-utils'
import CardPile from '../../src/components/Ui/CardPile.vue'
import { IPosition } from '../../src/components/GameZone/interface'

describe('CardPile', () => {

    const positions: Array<IPosition> = [
        {
            x: {
                ref: 'left',
                value: '10%'
            },
            y: {
                ref: 'bottom',
                value: '10%'
            }
        },
        {
            x: {
                ref: 'right',
                value: '10%'
            },
            y: {
                ref: 'top',
                value: '10%'
            }
        },
        {
            x: {
                ref: 'left',
                value: '10%'
            },
            y: {
                ref: 'top',
                value: '10%'
            }
        },
        {
            x: {
                ref: 'right',
                value: '10%'
            },
            y: {
                ref: 'bottom',
                value: '10%'
            }
        }
    ]

    positions.forEach(position => {
        it(`calculates cardContainerStyle correctly for position ${position}`, () => {
            const wrapper = mount(CardPile, { props: { position, card: {} } })

            const expectedStyle = {
                [position.x.ref]: position.x.value,
                [position.y.ref]: position.y.value
            }

            expect((wrapper.vm as any).cardContainerStyle).toEqual(expectedStyle)
        })
    })

    it(`should render with default postition if it's missing`, () => {
        const wrapper = mount(CardPile, { props: { position: {}, card: {} } })
        const expectedStyle = {
            right: "10%",
            top: "10%"
        }

        expect((wrapper.vm as any).cardContainerStyle).toEqual(expectedStyle)
    })
})
