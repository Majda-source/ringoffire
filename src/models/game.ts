export class Game{
    public players: string[] = [];
    public cardStack: string[] = [];
    public playedCards: string[] = [];
    public currentPlayer: number = 0;

    constructor(){
        for (let i = 1; i < 14; i++) {
            this.cardStack.push('ace_'+ i);
            
        }
    }
}