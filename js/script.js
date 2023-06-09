console.log("js ok");

const question = document.getElementById("question");
const answer = document.getElementById("answer");
const result = document.getElementById("result");

const countdownField = document.getElementById("countdownField");
const randomNumContainer = document.getElementById("randomNumContainer");
const answerContainer = document.getElementById("answerContainer");
const score = document.getElementById("score");
const guessList = document.getElementById("guessList");

const send = document.getElementById("send");

const numToDisplay = 5;
const sDelay = 5;
const msDelay = sDelay * 1000;

const generateRandomNums = (howmany, questContainer, answContainer) => {
    const numList = [];
    let randomNums = "";
    let anwerInput = "";
    for (let i = 0; i < howmany; i++){
        const rand = Math.floor(Math.random() * 100) + 1;
        numList.push(rand);
        randomNums += `<span id="ranNum_${i + 1}">${rand}</span>`;
        anwerInput += `<input type="text" id="ans_${i + 1}">`;
    }
    questContainer.innerHTML = randomNums;
    answContainer.innerHTML = anwerInput;
    return numList
};

const showResult = (pcList, playerList) => {
    let currentScore = 0;
    let guessList = "";
    for (let i = 0; i < playerList.length; i++){
        if (pcList.includes(playerList[i])){
            currentScore += 1;
            guessList += `${playerList[i]}, `;
        }
    }
    return [currentScore, guessList.substring(0, guessList.length - 2)]
};

const randNumList = generateRandomNums(numToDisplay, randomNumContainer, answerContainer);
console.log(randNumList);

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


send.addEventListener("click", () => {
    const ansList = [];
    for (let i = 0; i < numToDisplay; i++){
        const ansNum = document.getElementById(`ans_${i + 1}`).value;
        if (!isNaN(parseInt(ansNum))) ansList.push(parseInt(ansNum));
        
    }
    console.log(ansList);
    answer.classList.add("d-none");
    result.classList.remove("d-none");
    const resultArray = showResult(randNumList, ansList);
    score.innerText = resultArray[0];
    guessList.innerText = resultArray[1];
});










