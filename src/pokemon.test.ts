import {Pokemon} from "./index";

const p1 = new Pokemon({
    name: "hoho",
    baseSpeed: 130,
    baseAttack: 40,
    level: 53,
    nature: {
        attack: 1.1,
        speed: 0.9,
        defense: 1
    }
});

const p2 = new Pokemon({
    name: "haha",
    baseSpeed: 120,
    baseAttack: 50,
    level: 52,
    nature: {
        attack: 1,
        speed: 1.1,
        defense: 0.9
    }
});

describe("Pokemon class", function(){
    it( "p1's speed should be 127", function(){
        expect(p1.getSpeed()).toBe(127);
    });

    it( "p2's speed should be 141", function(){
        expect(p2.getSpeed()).toBe(141);
    })

    it( "p2 should be faster", function(){
        expect(Pokemon.getFirstAttacker(p1, p2)).toBe(p2);
    });

    it( "p1's attack should be 51", function(){
        expect(p1.getAttackDamage()).toBe(51);
    });

    it( "p2's attack should be  141", function(){
        expect(p2.getAttackDamage()).toBe(57);
    })
})