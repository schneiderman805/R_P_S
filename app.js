const userPoints = 0;
const computerPoints = 0;
const userPoints_span_tag = document.getElementById("user_points");
const computerPoints_span_tag = document.getElementById("computer_points");
const scoreCount_div_tag = document.querySelector(".score_count");
const result_div_tag = document.querySelector(".result");
const rock_div_tag = document.getElementById("rock");
const paper_div_tag = document.getElementById("paper");
const scissor_div_tag = document.getElementById("scissor");

function getComputerOption() {
    const options = ['rock', 'paper', 'scissor'];
    const randomNumber = Math.floor(Math.random() * 3);
    return options[randomNumber];
}


function game(userOption) {
    const computerOption = getComputerOption();
    switch (userOption + computerOption) {
        case "rockscissor":
        case "paperrock":
        case "scissorpaper":
        win();
        break;

        case "rockpaper":
        case "paperscissor":
        case "scissorrock":
        lose();
        break;

        case "rockrock":
        case "paperpaper":
        case "scissorscissor":
        draw();
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