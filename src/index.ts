export interface PokemonProps {
    name: string;
    speed: number;
}

export class Pokemon implements PokemonProps {
    readonly name: string;
    readonly speed: number;

    static getFirstAttacker (pokemon1: Pokemon, pokemon2: Pokemon): Pokemon {
        if (pokemon1.speed >= pokemon2.speed){
            return pokemon1;
        }
        return pokemon2;
    }

    constructor (props: PokemonProps) {
        this.name = props.name;
        this.speed = props.speed;
    }
};