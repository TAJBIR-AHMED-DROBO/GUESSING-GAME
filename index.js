const input = document.querySelector("input");
const replay = document.querySelector(".rp");
const submit = document.querySelector(".btn");
const result = document.querySelector(".res");
const attempt = document.querySelector(".at");
const finalDis = document.querySelector(".fd");
const form = document.querySelector("form");

let win = 0;
let lost = 0;
let att = 0;

form.addEventListener("submit", function (event) {
    event.preventDefault();
    let value = parseFloat(input.value);
    if (isNaN(value) || value < 1 || value > 5) {
        alert("Please enter a valid number between 1 and 5");
    } else {
        att++;
        let random = getRandomNumber();
        checkResult(value, random);
        let remainingAttempts = 5 - att;
        attempt.textContent = `YOU HAVE ${remainingAttempts} Attempt`;
    }

    if (att >= 5) {
        input.disabled = true;
        submit.disabled = true;
        attempt.textContent = "You have no more attempts. Click on Replay to play again";
        replay.classList.add("jk");
        displayFinalMessage();
    }

    input.value = "";
});

replay.addEventListener("click", () => {
    location.reload(true);
});

const getRandomNumber = () => {
    return Math.floor(Math.random() * 5) + 1;
}

const checkResult = (value, random) => {
    if (value === random) {
        win++;
        result.textContent = "YOU HAVE WON";
    } else {
        lost++;
        result.textContent = `YOU HAVE LOST, THE RANDOM NUMBER WAS ${random}`;
    }
    finalDis.textContent = `TOTAL WON ${win}, TOTAL LOST ${lost}`;
}

const displayFinalMessage = () => {
    switch (win) {
        case 0:
            alert("YOU HAVE NOT WON YET");
            break;
        case 1:
            alert("YOU HAVE WON 1 TIME. THAT'S GOOD");
            break;
        case 2:
            alert("YOU HAVE WON 2 TIMES. THAT'S VERY GOOD");
            break;
        case 3:
            alert("YOU HAVE WON 3 TIMES. THAT'S EXCELLENT");
            break;
        case 4:
            alert("YOU HAVE WON 4 TIMES. THAT'S GREAT");
            break;
        default:
            alert("YOU HAVE WON 5 TIMES. THAT'S THE GREATEST!");
            break;
    }
}
