'use strict'

let gotQuestionCorrect = 0;
let bestPossibleScore = 7;
let userName = prompt("Welcome to my About Me page! What's your name?");

function cookingQuestion() {
  let firstQuestionOriginal = prompt('Hi ' + userName + '. Before you come in, let\'s play a guessing game. Ok- first Question- Did I originally go to culinary school?');
  let firstQuestion = firstQuestionOriginal.toLowerCase();

  if (firstQuestion === 'yes' || firstQuestion === 'y') {
    alert('I enjoy cooking, but I didn\'t go to school for it. Have you seen Roadrunner?')
  } else if (firstQuestion=== 'no' || firstQuestion === 'n') {
    alert('You\'re right! I originally went to school for music!');
    gotQuestionCorrect++;
  } else {
    alert("We're playing this game whether you like it or not " + userName + '.')
  }
}
cookingQuestion();

function stumptownQuestion() {
  let secondQuestionOriginal = prompt('Did I ever work at Stumptown?');
  let secondQuestion = secondQuestionOriginal.toLowerCase();

  if (secondQuestion == 'yes' || secondQuestion == 'y') {
    alert('I did! I enjoyed that job a lot.')
    gotQuestionCorrect++;
  } else if (secondQuestion == 'no' || secondQuestion == 'n') {
    alert('Ok can YOU tell me where I worked then?');
  } else {
    alert("We're playing this game whether you like it or not " + userName + ".")
  }
}
stumptownQuestion();

function petQuestion() {
  let thirdQuestionOriginal = prompt('Do I have a pet iguana?');
  let thirdQuestion = thirdQuestionOriginal.toLowerCase();

  if (thirdQuestion == 'yes' || thirdQuestion == 'y') {
    alert('EHHHH(That\'s a buzzer sound btw)! I have a dog. ');
  } else if (thirdQuestion == 'no' || thirdQuestion == 'n') {
    alert('Yep! I have an awesome dog named Donte!');
    gotQuestionCorrect++;
  } else {
    alert('Come on ' + userName + '. This isn\'t the first time we\'ve been through this. I wanted a simple yes or no.');
  }
}
petQuestion();

function sandmanQuestion() {
  let fourthQuestionOriginal = prompt('Do you think I like graphic novels?');
  let fourthQuestion = fourthQuestionOriginal.toLowerCase();

  if (fourthQuestion == 'yes' || fourthQuestion == 'y') {
    alert('You\'re right! One of my favorites is The Sandman series by Neil Gaiman!')
    gotQuestionCorrect++;
  } else if (fourthQuestion == 'no' || fourthQuestion == 'n') {
    alert('Well, looks like you gotta read my About Me section then huh?');
  } else {
    alert('Alright have it your way. We still have one more question to get through though.')
  }
}
sandmanQuestion();

function sportsQuestion() {
  let fifthQuestionOriginal = prompt('Do I like any sports?');
  let fifthQuestion = fifthQuestionOriginal.toLowerCase();

  if (fifthQuestion == 'yes' || fifthQuestion == 'y') {
    alert('Yeah! I\'m a big NBA fan! Go Bucks!')
    gotQuestionCorrect++;
  } else if (fifthQuestion == 'no' || fifthQuestion == 'n') {
    alert('Well, looks like somebody got a wrong answer!');
  } else {
    alert('Ok fine, just go in ' + userName + '.')
  } 
}
sportsQuestion();

function numberGame() {
    let attempts = 0;
    let answer = false;
    let randomNumber = Math.floor((Math.random() * 50) + 1);
    let guessingGame = parseInt(prompt('Ok, I\'ve got another game for you. Guess a number between 1 and 50. You get 4 shots'));
    for (var i = 0; i < 4; i++) {
      if (isNaN(guessingGame)) {
        attempts--;
        guessingGame = parseInt(prompt(userName + '...That\'s not a number. I need a number from you.'));
      } else if (i === 3){
        alert('Well, you lost that one. I was thinking of ' + randomNumber + '.');
        break;
      } else if (guessingGame === randomNumber) {
        alert('Wow! You actually picked ' + randomNumber + '! Good job, ' + userName + '!');
        gotQuestionCorrect++;
        break;
      } else if (guessingGame < randomNumber) {
        guessingGame = parseInt(prompt('Guess again! Try something greater than ' + guessingGame + '.'));
      } else if (guessingGame > randomNumber) {
        guessingGame = parseInt(prompt('Not even close! Try something lower than ' + guessingGame + '.'));
      }
    }
  }
numberGame();

function finalQuestion() {
  let lastQuestion = alert('Alright. Last one I swear. Can you name just one of my favorite graphic novels? I\'ll give you six chances.');
  let graphicNovels = ['the sandman', 'swamp thing', 'maus', 'from hell', 'safe area gorazde', 'like a velvet glove cast in iron'];
  let guesses = 0;
  let correctAnswer = false;
  while (guesses < 6){
    guesses++;
    if(correctAnswer === false){
      lastQuestion = prompt('Alright, shoot. What do you think?');
    }
    for(let i = 0; i < graphicNovels.length; i++){
      if(lastQuestion === graphicNovels[i]){
        correctAnswer = true;
        break;
      }
    }
    if(correctAnswer){
      break;
    }
  }
  if(guesses === 5 && correctAnswer === false){
    alert('You couldn\'t even guess one? Here, check these out: ' + graphicNovels);
  } else if(correctAnswer) {
    alert('Nice you got one right! All the answers were: ' + graphicNovels);
      gotQuestionCorrect++;
    }
  }
  finalQuestion();

  function finalMessage() {
    let finalScoreMessage = alert('That\'s all she wrote. You got ' + gotQuestionCorrect + ' out of ' + bestPossibleScore + ', ' + userName + '. Come on in. Oh ya...and if you\'re gonna click the links in the nav bar, be prepared to play my guessing game all over again. But then again, maybe then you could shoot for a perfect score.');
  }
  finalMessage();
