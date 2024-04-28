import { Deck } from "../DeckController/Deck";

export class PawnController {
    private _deck: Deck = new Deck();

    public drawCard() {
        return this._deck.draw();
    }

    public get deck() {
        return this._deck;
    }
}