
var randomNumber = function() {
    return (Math.floor(Math.random() * (1 + 9 - 1) + 1)).toString();
}

module.exports = randomNumber;