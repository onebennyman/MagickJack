export enum ZoneComponents {
  discard,
  deck,
  play
}

type ZoneColors = 'red' | 'yellow' | 'blue' | 'green' | 'green'

interface IZoneStyle {
  color: ZoneColors
  padding: string
}

export interface IZone {
  type: string
  style: Partial<IZoneStyle>
  components: {
    [key in ZoneComponents]?: boolean
  }
}
