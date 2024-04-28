import { IStyle } from "../GameField/interface";

export enum ZoneComponents {
  discard,
  deck,
  play,
  controls
}

export interface IPosition {
  x: {
    ref: 'left' | 'right';
    value?: Number | string;
  },
  y: {
    ref: 'top' | 'bottom';
    value?: Number | string;
  }
}


export interface IZone {
  type: string;
  style: Partial<IStyle>;
  position: Partial<IPosition>;
}
