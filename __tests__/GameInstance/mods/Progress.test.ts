import Progress from '../../../src/components/GameInstance/mods/_Progress'

describe('firstLoad()', () => {
  let progress = new Progress()
  beforeEach(() => {
    progress = new Progress()
  })

  it("should return error: false when it's the first load", () => {
    const firstLoad = progress.firstLoad()

    expect(firstLoad).toBe(false)
  })

  it('should return error: true if already in progress', () => {
    progress.inProgress = true

    const result = progress.firstLoad()
    expect(result).toBe(true)
  })

  it('should return error: true if already initialized', () => {
    progress.firstLoad()
    const secondLoad = progress.firstLoad()

    expect(secondLoad).toBe(true)
  })

  it("should set 'init' property to true", () => {
    progress.firstLoad()
    expect(progress.init).toBe(true)
  })
})
