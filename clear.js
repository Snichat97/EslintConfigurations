/* eslint-disable */ 
var answer = document.getElementById('answer')
var increase = document.getElementById('increase')
var clear = document.getElementById('clear')
var answer_value = 0

function clearing () {
  console.log('cleared ', answer_value)
  answer_value = 0
  answer.innerHTML = answer_value
}

clear.addEventListener('click', clearing)