import GameInstance from '../../src/components/GameInstance/GameInstance'

describe('firstLoad()', () => {
  beforeEach(() => {
    GameInstance.reset()
  })
  it('it should not return an error when calling it for the first time', () => {
    const firstLoad = GameInstance.firstLoad()
    expect(firstLoad).toEqual(false)
  })
  it('calling more than once, returns an error', () => {
    GameInstance.firstLoad()
    const secondLoad = GameInstance.firstLoad()
    expect(secondLoad).toEqual(true)
  })
})
