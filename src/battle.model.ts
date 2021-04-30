import { Pokemon } from "./pokemon.model";

export interface BattleProps {
    pokemon1: Pokemon,
    pokemon2: Pokemon
};

export class Battle {
    adversaries: Pokemon[] = new Array<Pokemon>();
    
    constructor(pokemon1: Pokemon, pokemon2: Pokemon){
        this.adversaries.push(pokemon1, pokemon2);
    }

    async battle(random = Math.random): Promise<Pokemon> {
        const firstAttacker = Pokemon.getFirstAttacker(this.adversaries[0], this.adversaries[1]);
        let attacker = this.adversaries.indexOf(firstAttacker);

        return new Promise<Pokemon>(resolve => {
            const intervalId = setInterval(() => {
                let defender = (attacker + 1) % 2;
                this.adversaries[attacker].hit(this.adversaries[defender], random);

                if(this.adversaries[defender].hp === 0){
                    resolve(this.adversaries[attacker]);
                    clearInterval(intervalId);

                } else {
                    attacker = defender;
                }
            }, 1000);
        })
    }
}