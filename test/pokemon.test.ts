import {Pokemon} from "../src";

describe("Pokemon class", () => {
    const p1 = new Pokemon({
        name: "Charizard",
        hp: 78,
        speed: 100,
        attack: 84
    });
    
    const p2 = new Pokemon({
        name: "Lucario",
        hp: 70,
        speed: 110,
        attack: 50
    });

    it("should return p2 as fastest", () => {
        const attacker = Pokemon.getFirstAttacker(p1, p2);
        expect(attacker).toEqual(p2)
    })

    it("should miss attack when unlucky", () => {
        p1.hit(p2, () => 0);

        expect(p2.hp).toBe(70);
    })

    it("should land attack when lucky", () => {
        p1.hit(p2, () => 1);

        expect(p2.hp).toBe(0);
    })
})