import {Pokemon} from "./index";

const p1 = new Pokemon({
    name: "hoho",
    speed: 130
});

const p2 = new Pokemon({
    name: "haha",
    speed: 120
});

describe("Pokemon class", function(){
    it( "should be faster", function(){
        expect(Pokemon.getFirstAttacker(p1, p2)).toBe(p1);
    });
})