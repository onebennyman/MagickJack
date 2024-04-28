import { ZoneComponents } from '../GameZone/interface'
import { PawnController } from '../PawnController/PawnController'

type ZoneColors = 'red' | 'yellow' | 'blue' | 'green' | 'green'

export interface IStyle {
  color: ZoneColors
  padding: string
}

export interface IField {
  type: 'player' | 'enemy'
  style: Partial<IStyle>
  components: {
    [key in ZoneComponents]?: boolean
  },
  controller: PawnController
}
