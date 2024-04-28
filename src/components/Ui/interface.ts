export interface IButton {
    msg: string;
}

export interface ICard {
    msg?: string;
}

export type TCardContainerStyle = {
    [key in 'right' | 'left' | 'top' | 'bottom']?: string | number
  }