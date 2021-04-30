type NatureBonus = 1 | 1.1 | 0.9;
type NatureKey = "attack" | "speed";

export interface Nature {
    attack: NatureBonus;
    speed:NatureBonus;
}

export interface PokemonProps {
    name: string;
    baseHp: number;
    baseSpeed: number;
    baseAttack: number;
    level: number;
    nature: Nature;
}

export class Pokemon implements PokemonProps {
    readonly name: string;
    readonly baseHp: number;
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
        this.baseHp = props.baseHp;
        this.baseSpeed = props.baseSpeed;
        this.baseAttack = props.baseAttack;
        this.nature = props.nature;
        this.level = props.level;
    }

    private getFinalStatValue (baseValue: number, statName: NatureKey): number {
        return Math.floor(
            Math.floor(2 * baseValue * this.level / 100 + 5) * this.nature[statName]
        );
    }

    getSpeed(): number {
        return this.getFinalStatValue(this.baseSpeed, "speed");
    }

    getAttack(): number {
        return this.getFinalStatValue(this.baseAttack, "attack");
    }
    
    getHp(): number {
        return Math.floor(2 * this.baseHp * this.level / 100 + this.level + 10);
    }
};