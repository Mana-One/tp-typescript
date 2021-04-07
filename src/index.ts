type NatureBonus = 1 | 1.1 | 0.9;
export interface Nature {
    attack: NatureBonus;
    defense: NatureBonus;
    speed:NatureBonus;
}

export interface PokemonProps {
    name: string;
    baseSpeed: number;
    baseAttack: number;
    level: number;
    nature: Nature;
}

export class Pokemon implements PokemonProps {
    readonly name: string;
    readonly baseSpeed: number;
    readonly baseAttack: number;
    readonly nature: Nature;
    level: number;

    static getFirstAttacker (pokemon1: Pokemon, pokemon2: Pokemon): Pokemon {
        if (pokemon1.getSpeed() >= pokemon2.getSpeed()){
            return pokemon1;
        }
        return pokemon2;
    }

    constructor (props: PokemonProps) {
        this.name = props.name;
        this.baseSpeed = props.baseSpeed;
        this.baseAttack = props.baseAttack;
        this.nature = props.nature;
        this.level = props.level;
    }

    private getFinalStatValue (baseValue: number, statName: string): number {
        return Math.floor(
            Math.floor(2 * baseValue * this.level / 100 + 5) * this.nature[statName]
        );
    }

    getSpeed(): number {
        return this.getFinalStatValue(this.baseSpeed, "speed");
    }

    getAttackDamage(): number {
        return this.getFinalStatValue(this.baseAttack, "attack");
    }
};