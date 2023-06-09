console.log("js ok");

const question = document.getElementById("question");
const answer = document.getElementById("answer");
const result = document.getElementById("result");

const countdownField = document.getElementById("countdownField");
const randomNumContainer = document.getElementById("randomNumContainer");
const answerContainer = document.getElementById("answerContainer");
const numToDisplay = 5;
const sDelay = 5;
const msDelay = sDelay * 1000;

const generateRandomNums = (howmany, questContainer, answContainer) => {
    let randomNums = "";
    let anwerInput = "";
    for (let i = 0; i < howmany; i++){
        const rand = Math.floor(Math.random() * 100) + 1;
        randomNums += `<span id="ranNum_${i + 1}">${rand}</span>`;
        anwerInput += `<input type="text" id="ans_${i + 1}">`;
    }
    questContainer.innerHTML = randomNums;
    answContainer.innerHTML = anwerInput;
};

generateRandomNums(numToDisplay, randomNumContainer, answerContainer);

let countdownValue = sDelay;
countdownField.innerText = countdownValue;

const countdown = setInterval(() => {
    countdownValue -= 1;
    countdownField.innerText = countdownValue;

    if (countdownValue === 0){
        clearInterval(countdown);
        question.classList.add("d-none");
        answer.classList.remove("d-none");
    }
}, 1000);







