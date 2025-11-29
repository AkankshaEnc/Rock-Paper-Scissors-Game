let choices = document.querySelectorAll(".choice");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");
let msg = document.querySelector("#msg");

let userScore = 0;
let compScore = 0;

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * 3);  //0, 1, 2 values generated
    return  options[index];
};

const gameDraw = () => {
    msg.innerText = "Game Draw. Play again."
    msg.style.backgroundColor = "#22223b";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beat ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost. ${compChoice} beat your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    let compChoice = genCompChoice();

    if(userChoice === compChoice){
        gameDraw();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            //compChoice  -> paper, scissor
            userWin = (compChoice === "scissors") ? true : false;
        }
        else if(userChoice === "paper"){
            //compChoice -> rock, scissors
            userWin = (compChoice === "rock") ? true : false;
        }
        else{
             //compChoice -> rock, paper
             userWin = (compChoice === "paper") ? true : false;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})