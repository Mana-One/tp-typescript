import { Pokemon } from "./pokemon.model";

export interface BattleProps {
    pokemon1: Pokemon,
    pokemon2: Pokemon
};

export class Battle {
    pokemon1: {
        character: Pokemon,
        currentHp: number
    };
    pokemon2: {
        character: Pokemon,
        currentHp: number
    };
    
    constructor(pokemon1: Pokemon, pokemon2: Pokemon){
        this.pokemon1 = {
            character: pokemon1,
            currentHp: pokemon1.getHp()
        };
        this.pokemon2 = {
            character: pokemon2,
            currentHp: pokemon2.getHp()
        }
    }

    battle(){
        const firstAttacker = Pokemon.getFirstAttacker(this.pokemon1.character, this.pokemon2.character);
    }
}