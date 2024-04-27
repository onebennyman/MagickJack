export enum ZoneComponents {
    discard,
    deck,
    play,
}

export interface IZone {
    type: string,
    components: {
       [ key in ZoneComponents]?: boolean
    }
}
