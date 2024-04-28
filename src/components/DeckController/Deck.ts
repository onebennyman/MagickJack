import { Card } from "../Card/Card";
import { ICard, TSuites, TValues } from "../Card/interface";

const BLACKJACK_CARDS: {
    suits: Array<TSuites>,
    values: Array<TValues>
} = {
    suits: [
        'Hearts', 'Diamonds', 'Clubs', 'Spades'],
    values: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
}

function generateDeck(): ICard[] {
    const deck: Array<ICard> = [];
    BLACKJACK_CARDS.suits.forEach(suit => {
        BLACKJACK_CARDS.values.forEach(value => {
            deck.push({ suit, value });
        });
    });
    return deck;
}

function replicateDeck(deck: ICard[], times: number): ICard[] {
    const replicatedDeck = [];
    for (let i = 0; i < times; i++) {
        replicatedDeck.push(...deck);
    }
    return replicatedDeck;
}

const BLACKJACK_DECK = replicateDeck(generateDeck(), 4);


export class Deck {
    private toBeDrawn: Array<ICard> = [...BLACKJACK_DECK];
    private _inPlay: Array<Card> = [];

    public draw(): Card {
        const randomIndexFromToBeDrawn = getRandomIndexFromArray(this.toBeDrawn.length);

        const drawnCard = this.toBeDrawn.splice(randomIndexFromToBeDrawn, 1)[0];

        return this.addInPlay(drawnCard);
    }

    private addInPlay(drawnCard: ICard) {
        const card = new Card(drawnCard)

        this._inPlay.push(card)

        return card;
    }

    public get inPlay() { return this._inPlay }



    public calculateTotalValue(): number {
        const possibleTotals: number[] = [0];
        this._inPlay.forEach(card => {
            const cardValues = card.value;
            const newPossibleTotals: number[] = [];
            possibleTotals.forEach(total => {
                cardValues.forEach(value => {
                    newPossibleTotals.push(total + value);
                });
            });
            possibleTotals.splice(0, possibleTotals.length, ...newPossibleTotals);
        });
        const validTotals = possibleTotals.filter(total => total <= 21);
        return validTotals.length > 0 ? Math.max(...validTotals) : Math.min(...possibleTotals);
    }



}

function getRandomIndexFromArray(arrayLength: number): number {
    return Math.floor(Math.random() * arrayLength);
}

function getCardValue(card: ICard): number {
    const value = card.value;
    if (value === 'J' || value === 'Q' || value === 'K') {
        return 10;
    } else if (value === 'A') {
        // Aquí puedes determinar si A vale 1 o 11 según el contexto del juego
        return 11;
    } else {
        return parseInt(value);
    }
}