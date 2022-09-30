// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

//Appends a cat to the end of the array

function destructivelyAppendCat() {
    cats.push("Ralph");
}

//Adds a name to the beginning of the array
function destructivelyPrependCat() {
    cats.unshift("Bob");
}

//Removes the last name from the array
function destructivelyRemoveLastCat() {
    cats.pop();
}

//Removes the first name from the array
function destructivelyRemoveFirstCat() {
    cats.shift();
}

//appends a cat to the cats array and returns a new array, leaving the cats array unchanged. Why need to return inside this function to pass test?
function appendCat() {
    const newCatsArray = [...cats];
    newCatsArray.push("Broom");
    return newCatsArray;
}

// prepends a cat to the cats array and returns a new array, leaving the cats array unchanged
function prependCat() {
    const newCatsArray = [...cats];
    newCatsArray.unshift("Arnold");
    return newCatsArray;
}

// removes the last cat in the cats array and returns a new array, leaving the cats array unchanged
function removeLastCat() {
    const newCatsArray = [...cats];
    newCatsArray.pop();
    return newCatsArray;
}

// removes the first cat from the cats array and returns a new array, leaving the cats array unchanged
function removeFirstCat() {
    const newCatsArray = [...cats];
    newCatsArray.shift();
    return newCatsArray;
}