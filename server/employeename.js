var firstNamesArray = ["Noah", "Emma", "Liam", "Olivia", "Mason", "Sophia", "Jacob", "Isabella", "William", "Ava"];
var lastNamesArray = ["Smith", "Johnson", "Williams", "Brown", "Miller", "Garcia", "Moore", "Taylor", "Lee", "Clark"];

function combineNames(){
    var firstName = firstNamesArray[randomNumber(0, firstNamesArray.length-1)];
    var lastName = lastNamesArray[randomNumber(0, lastNamesArray.length-1)];

    return firstName + " " + lastName;
}

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}

module.exports = combineNames;