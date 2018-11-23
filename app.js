const userPoints = 0;
const computerPoints = 0;
const userPoints_span_tag = document.getElementById("user_points");
const computerPoints_span_tag = document.getElementById("computer_points");
const scoreCount_div_tag = document.querySelector(".score_count");
const result_div_tag = document.querySelector(".result");
const rock_div_tag = document.getElementById("rock");
const paper_div_tag = document.getElementById("paper");
const scissor_div_tag = document.getElementById("scissor");

rock_div_tag.addEventListener('click', function() {
    console.log("you clicked on rock!");

})

paper_div_tag.addEventListener('click', function() {
    console.log("you clicked on paper!");

})

scissor_div_tag.addEventListener('click', function() {
    console.log("you clicked on scissor!");

})