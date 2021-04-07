export interface MoveProps {
    name: string;
    power: number;
    accuracy: number;
};

export class Move implements MoveProps {
    readonly name: string;
    readonly power: number;
    readonly accuracy: number;
    
    constructor (props: MoveProps) {
        this.name = props.name;
        this.power = props.power;
        this.accuracy = props.accuracy;
    }

    hasMissed(random = Math.random): boolean {
        const hitChance = random() * 99;
        return hitChance >= this.accuracy;
    }
}