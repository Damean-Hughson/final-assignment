document.getElementById("button").addEventListener("click", randomizer)
let randomNumber = 0
let randomNumber2 = 0
let randomNumber3 = 0
let randomNumber4 = 0
let randomNumber5 = 0
let randomNumber6 = 0
let guess = 0
function randomizer(){
  guess = document.getElementById("input").value
  guess = parseInt(guess)

  randomNumber = Math.random() * 20 + 1
  randomNumber = parseInt( randomNumber)

  randomNumber2 = Math.random() * 20 + 1
  randomNumber2 = parseInt( randomNumber2)

  randomNumber3 = Math.random() * 20 + 1
  randomNumber3 = parseInt( randomNumber3)
  
  randomNumber4 = Math.random() * 20 + 1
  randomNumber4 = parseInt( randomNumber4)

  randomNumber5 = Math.random() * 20 + 1
  randomNumber5 = parseInt( randomNumber5)
  
  randomNumber6 = Math.random() * 20 + 1
  randomNumber6 = parseInt( randomNumber6)

  if (guess == randomNumber) {
    document.getElementById("answer").innerHTML = "number 1 was a match!"
    document.getElementById("answer").style.color = "green"
  }
  if (guess != randomNumber) {
    document.getElementById("answer").innerHTML = "number 1 was not a match"
    document.getElementById("answer").style.color = "black"
  }
  if (guess == randomNumber2) {
    document.getElementById("answer2").innerHTML = "number 2 was a match!"
    document.getElementById("answer2").style.color = "green"

  }
  if (guess != randomNumber2) {
    document.getElementById("answer2").innerHTML = "number 2 was not a match"
    document.getElementById("answer2").style.color = "black"
  }
  if (guess == randomNumber3) {
    document.getElementById("answer3").innerHTML = "number 3 was a match!"
     document.getElementById("answer3").style.color = "green"
  }
   if (guess != randomNumber3) {
    document.getElementById("answer3").innerHTML = "number 3 was not a match"
     document.getElementById("answer3").style.color = "black"
  }
  if (guess == randomNumber4) {
    document.getElementById("answer4").innerHTML = "number 4 was a match!"
     document.getElementById("answer4").style.color = "green"
  }
   if (guess != randomNumber4) {
    document.getElementById("answer4").innerHTML = "number 4 was not a match"
     document.getElementById("answer4").style.color = "black"
  }
  if (guess == randomNumber5) {
    document.getElementById("answer5").innerHTML = "number 5 was a match!"
     document.getElementById("answer5").style.color = "green"
  }
   if (guess != randomNumber5) {
    document.getElementById("answer5").innerHTML = "number 5 was not a match"
     document.getElementById("answer5").style.color = "black"
  }
  if (guess == randomNumber6) {
    document.getElementById("answer6").innerHTML = "number 6 was a match!"
     document.getElementById("answer6").style.color = "green"
  }
    if (guess != randomNumber6) {
    document.getElementById("answer6").innerHTML = "number 6 was not a match"
     document.getElementById("answer6").style.color = "black"
  }
}