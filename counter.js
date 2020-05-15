var answer = document.getElementById('answer');
var increase = document.getElementById('increase');
var decrease = document.getElementById('decrease');

//  done to allow unused variable
// eslint-disable-next-line
var clear = document.getElementById('clear')
var answer_value = 0;

function increment () {
    console.log('increasing', answer_value);
    answer_value += 1;
    setAnswerValue();
}

function decrement () {
    console.log('decreasing', answer_value);
    answer_value -= 1;
    setAnswerValue();
}

function setAnswerValue () {
    answer.innerHTML = answer_value;
}

increase.addEventListener('click', increment);
decrease.addEventListener('click', decrement);
