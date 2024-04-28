import { ZoneComponents } from "../GameZone/interface"

type ZoneColors = 'red' | 'yellow' | 'blue' | 'green' | 'green'

export interface IStyle {
  color: ZoneColors
  padding: string
}

export interface IField {
    type: 'player' | "enemy"
    style: Partial<IStyle>
    components: {
        [key in ZoneComponents]?: boolean
      }
}