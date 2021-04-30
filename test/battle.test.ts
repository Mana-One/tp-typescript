import {Battle, Pokemon} from "../src";

describe("Battle simulation", () => {
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

    const battle = new Battle(p1, p2);

    it("should return p2 as winner if no hit was missed", () => {
        return expect(battle.battle()).resolves.toEqual(p1);
    })
})