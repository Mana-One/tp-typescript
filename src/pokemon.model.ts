export interface PokemonProps {
    name: string;
    hp: number;
    speed: number;
    attack: number;
}

export class Pokemon implements PokemonProps {
    name: string;
    hp: number;
    speed: number;
    attack: number;

    static getFirstAttacker (pokemon1: Pokemon, pokemon2: Pokemon): Pokemon {
        if (pokemon1.speed >= pokemon2.speed){
            return pokemon1;
        }
        return pokemon2;
    }

    constructor (props: PokemonProps) {
        this.name = props.name;
        this.hp = props.hp;
        this.attack = props.attack;
        this.speed = props.speed;
    }

    hit(foe: Pokemon, random = Math.random): void {
        const chance = random() * 99;
        if(chance > 15){
            foe.receiveHit(this.attack);
        }
    }

    receiveHit(dmg: number): void {
        this.hp -= dmg;
        this.hp = this.hp < 0 ? 0 : this.hp;
    }
};