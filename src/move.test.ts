import {Move} from "./move.model";

const move = new Move({
    name: "cut",
    accuracy: 95,
    power: 50
});

describe("Move class", function(){
    it( "should miss when unlucky", function(){
        const random = function(){
            return 1;
        };
        expect(move.hasMissed(random)).toBe(true);
    });

    it( "should hit when lucky", function(){
        const random = function(){
            return 0.05;
        };
        expect(move.hasMissed(random)).toBe(false);
    });
})