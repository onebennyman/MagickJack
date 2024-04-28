import { ICard } from "./interface";

export class Card {
    state: ICard | undefined;

    constructor(card?: ICard) {
        this.state =
            card ?
                {
                    suit: card.suit,
                    value: card.value
                } : undefined
    }

    public get value(): number[] {
        if (!this.state) return [];

        const value = this.state?.value;
        if (value === 'J' || value === 'Q' || value === 'K') {
            return [10];
        } else if (value === 'A') {
            return [1, 11];
        } else {
            return [parseInt(value)];
        }
    }
}