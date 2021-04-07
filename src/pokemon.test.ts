import {Pokemon} from "./pokemon.model";

const p1 = new Pokemon({
    name: "Charizard",
    baseHp: 78,
    baseSpeed: 100,
    baseAttack: 84,
    level: 53,
    nature: {
        attack: 1.1,
        speed: 0.9
    }
});

const p2 = new Pokemon({
    name: "Lucario",
    baseHp: 70,
    baseSpeed: 110,
    baseAttack: 50,
    level: 52,
    nature: {
        attack: 1,
        speed: 1.1
    }
});

describe("Pokemon class", function(){
    it( "should return 99 for p1's speed", function(){
        expect(p1.getSpeed()).toBe(99);
    });

    it( "should return p2 as the fastest", function(){
        expect(Pokemon.getFirstAttacker(p1, p2)).toBe(p2);
    });

    it( "should return 103 for p1's attack", function(){
        expect(p1.getAttack()).toBe(103);
    });

    it( "should return 145 for p1's hp", function(){
        expect(p1.getHp()).toBe(145);
    });
})