

function chooseSkill() {
    var randomNum = Math.floor(Math.random() * (1 + 3 - 1) + 1);
    if (randomNum == 1) {
        return "Front End";
    } else if (randomNum == 2){
        return "Back End";
    } else if (randomNum == 3) {
        return "Logic";
    }
}

module.exports = chooseSkill;