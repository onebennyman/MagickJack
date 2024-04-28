export type TSuites = "Hearts" | "Diamonds" | "Clubs" | "Spades";
export type TValues = "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "J" | "Q" | "K" | "A";

export interface ICard {
    suit: TSuites;
    value: TValues;
}