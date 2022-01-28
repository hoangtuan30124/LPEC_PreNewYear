// Prefabs
var sites = {
    "rickroll": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    "winner": "prizes/winner.html",
    "recursive": "404.html",
    "comeback": "https://www.facebook.com/LPECpage"
};
const range = 5000;
var prize = ["winner","rickroll","recursive","comeback"]
var prizeRange = {
    "rickroll": 0,
    "winner": 1410,
    "recursive": 2500,
    "comeback": 4500
}

//Check prizes
function checkPrize(number, prizes) {
    var result = 0;
    for (var prize in prizes) {
        if (prize != "winner") result += (number > prizes[prize]);
    }
    return result * (number != prizes["winner"]); // Check "winner"
}

//looting machine
function RandomSite() {
    var ranNumber = Math.random()*range + 1;
    // Detect prize whether the "winner" number showed or not
    var index = checkPrize(ranNumber, prizeRange);
    location.href = sites[prize[index]]
}

//Made by LPEC with ❤️