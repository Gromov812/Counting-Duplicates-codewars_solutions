'use strict';

let inputString = "Indivisibilities";

function func (text) {

    text = text.toLowerCase();
    let counter = {};

    text = [...text];
    let resCount = 0;
    console.log(text);
    for (let el in text) {
        counter[text[el]] = (counter[text[el]]+1) || 1;
        
        
        
    }

        for (let el in counter) {
            console.log(counter[el]);
            if (counter[el] > 1) resCount++;
        }

        return resCount;

}

console.log(func(inputString));