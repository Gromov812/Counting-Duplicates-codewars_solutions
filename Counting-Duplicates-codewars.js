'use strict';

let inputString = "Indivisibilities";

function func (text) {

    text = text.toLowerCase(); // transform argument string to lower case
    let counter = {}; // initialize new Object to collect counting letters

    text = [...text]; // convert string to array
    let resCount = 0; // initialize new var for return result 

    //Do iterations to get Object counter with numbers of duplicates
    
    for (let el in text) {
        counter[text[el]] = (counter[text[el]]+1) || 1;
 }
    //Do another cicle for counter object for to get number of duplivctes  
        for (let el in counter) {
            console.log(counter[el]);
            if (counter[el] > 1) resCount++;
        }

        return resCount;     // return result

}
