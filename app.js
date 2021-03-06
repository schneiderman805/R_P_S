var userPoints = 0;
var computerPoints = 0;
const userPoints_span_tag = document.getElementById("user_points");
const computerPoints_span_tag = document.getElementById("computer_points");
const scoreCount_div_tag = document.querySelector(".score_count");
const result_p_tag = document.querySelector(".result > p");
const rock_div_tag = document.getElementById("rock");
const paper_div_tag = document.getElementById("paper");
const scissor_div_tag = document.getElementById("scissor");

function getComputerOption() {
    const options = ['rock', 'paper', 'scissor'];
    const randomNumber = Math.floor(Math.random() * 3);
    return options[randomNumber];
}


function win(userOption, computerOption) {
    userPoints++;
    userPoints_span_tag.innerHTML = userPoints;
    computerPoints_span_tag.innerHTML = computerPoints;
    result_p_tag.innerHTML = userOption + " beats " + computerOption + ". you win! ";
    

}

function lose(userOption, computerOption) {
    computerPoints++;
    userPoints_span_tag.innerHTML = userPoints;
    computerPoints_span_tag.innerHTML = computerPoints;
    result_p_tag.innerHTML = userOption + " loses against  " + computerOption + ". you lose! ";
    

}

function draw(userOption, computerOption) {
    result_p_tag.innerHTML = userOption + " = " + computerOption + ". It's a draw! ";

}

function game(userOption) {
    const computerOption = getComputerOption();
    switch (userOption + computerOption) {
        case "rockscissor":
        case "paperrock":
        case "scissorpaper":
        win(userOption, computerOption);
        break;

        case "rockpaper":
        case "paperscissor":
        case "scissorrock":
        lose(userOption, computerOption);
        break;

        case "rockrock":
        case "paperpaper":
        case "scissorscissor":
        draw(userOption, computerOption);
        break;


    }
}


function main() {
    rock_div_tag.addEventListener('click', function() {
        game("rock");

    })

    paper_div_tag.addEventListener('click', function() {
        game("paper");

    })

    scissor_div_tag.addEventListener('click', function() {
        game("scissor");

    })
}

main();