'use strict'

let gotQuestionCorrect = 0;
let bestPossibleScore = 7;

let userName = prompt("Welcome to my About Me page! What's your name?");
// console.log(userName);

let firstQuestionOriginal = prompt('Hi ' + userName + '. Before you come in, let\'s play a guessing game. Ok- first Question- Did I originally go to culinary school?');
let firstQuestion = firstQuestionOriginal.toLowerCase();
//console.log(firstQuestion);

if (firstQuestion === 'yes' || firstQuestion === 'y') {
  alert('I enjoy cooking, but I didn\'t go to school for it. Have you seen Roadrunner?')
} else if (firstQuestion=== 'no' || firstQuestion === 'n') {
  alert('You\'re right! I originally went to school for music!');
  gotQuestionCorrect++;
} else {
  alert("We're playing this game whether you like it or not " + userName + '.')
}

let secondQuestionOriginal = prompt('Did I ever work at Stumptown?');
let secondQuestion = secondQuestionOriginal.toLowerCase();

if (secondQuestion == 'yes' || secondQuestion == 'y') {
    // console.log('I did! I enjoyed that job a lot.')
  alert('I did! I enjoyed that job a lot.')
  gotQuestionCorrect++;
} else if (secondQuestion == 'no' || secondQuestion == 'n') {
    // console.log('Ok can YOU tell me where I worked then?')
  alert('Ok can YOU tell me where I worked then?');
} else {
    // console.log("We're playing this game whether you like it or not " + username + ".");
  alert("We're playing this game whether you like it or not " + userName + ".")
}

let thirdQuestionOriginal = prompt('Do I have a pet iguana?');
let thirdQuestion = thirdQuestionOriginal.toLowerCase();

if (thirdQuestion == 'yes' || thirdQuestion == 'y') {
    // console.log('EHHHH(That\'s a buzzer sound btw)! I have a dog. ');
  alert('EHHHH(That\'s a buzzer sound btw)! I have a dog. ');
} else if (thirdQuestion == 'no' || thirdQuestion == 'n') {
    // console.log('Yep! I have an awesome dog named Donte!')
  alert('Yep! I have an awesome dog named Donte!');
  gotQuestionCorrect++;
} else {
    // console.log('Come on ' + username + '. This isn\'t the first time we\'ve been through this. I wanted a simple yes or no.');
  alert('Come on ' + userName + '. This isn\'t the first time we\'ve been through this. I wanted a simple yes or no.');
}

let fourthQuestionOriginal = prompt('Do you think I like graphic novels?');
let fourthQuestion = fourthQuestionOriginal.toLowerCase();

if (fourthQuestion == 'yes' || fourthQuestion == 'y') {
    // console.log('You\'re right! One of my favorites is The Sandman series by Neil Gaiman!)
  alert('You\'re right! One of my favorites is The Sandman series by Neil Gaiman!')
  gotQuestionCorrect++;
} else if (fourthQuestion == 'no' || fourthQuestion == 'n') {
    // console.log('Well, looks like you gotta read my about me section then huh?');
  alert('Well, looks like you gotta read my About Me section then huh?');
} else {
    // console.log('Alright have it your way. We still have one more question to get through though.')
  alert('Alright have it your way. We still have one more question to get through though.')
}

let fifthQuestionOriginal = prompt('Do I like any sports?');
let fifthQuestion = fifthQuestionOriginal.toLowerCase();

if (fifthQuestion == 'yes' || fifthQuestion == 'y') {
    // console.log('Yeah! I\'m a big NBA fan! More specifically the Milwuakee Bucks! I actually got to go to Game 3 of the NBA finals this year! It was Milwuakee\'s first finals home game in 50 years!')
  alert('Yeah! I\'m a big NBA fan! More specifically the Milwuakee Bucks! I actually got to go to Game 3 of the NBA finals this year! It was Milwuakee\'s first finals home game in 50 years!')
  gotQuestionCorrect++;
} else if (fifthQuestion == 'no' || fifthQuestion == 'n') {
    // console.log('Well, looks like somebody got a wrong answer!')
  alert('Well, looks like somebody got a wrong answer!');
} else {
    // console.log('Ok fine, just go in' + userName + '.')
  alert('Ok fine, just go in ' + userName + '.')
} 


// // Keeping this other guessing game here for now to see if i like it better
// var guessingGame = prompt('Ok, I\'ve got another game for you. Guess a number between 1 and 50. You get 2 shots');
// var answer = false;
// var randomNumber = Math.floor(Math.random() * 50);
// let guesses = 4;
// for(let i = 0; i <= 4; i++) {
//   if (guessingGame === randomNumber ) {
//     answer = true;
//   } else if ( guessingGame < randomNumber ) {
//     var tooHigh = prompt('Nope it\'s greater than ' + guessingGame);
//     if (tooHigh === randomNumber) {
//        answer = true;

//       }
//     } else if ( guessingGame > randomNumber ) {
//       var tooLow = prompt('Try again. It\'s less than ' + guessingGame);
//       if (tooLow === randomNumber) {
//         answer = true;
//       }
//     }
//     if (answer) {
//       alert('Wow! you actually got it!');
//     } else {
//       alert('Better luck next time! the answer was ' + randomNumber);
//     }
//   }

  //add parseInt to prompt if any errors occur
  //Question 6

let guessingGame = parseInt(prompt('Ok, I\'ve got another game for you. Guess a number between 1 and 50. You get 4 shots'));
let attempts = 0;
let answer = false;
let randomNumber = Math.floor((Math.random() * 50) + 1);
for (let i = 0; i < 3; i++) {
if (attempts === 3){
    alert('You\'re out of guesses! My number was ' + randomNumber + '!');
    break;
  } else if (guessingGame === randomNumber) {
    alert('Wow! You actually picked ' + randomNumber + '! Good job.');
    gotQuestionCorrect++;
    break;
  } else if (guessingGame < randomNumber) {
    guessingGame = parseInt(prompt('Too low! Try something greater than ' + guessingGame));
  } else if (guessingGame > randomNumber) {
    guessingGame = parseInt(prompt('Not even close! Try something lower than ' + guessingGame + '.'));
  }
}

//Question 7
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

    // let userScore = prompt('Hey ' + userName + '! You got ' + gotQuestionCorrect + ' questions about me correct! ')

    let finalScoreMessage = alert('You got ' + gotQuestionCorrect + ' out of 7  questions right, ' + userName + '.');
    

    //still working on this part =)
    /*if(gotQuestionCorrect === bestPossibleScore) {
      alert('You got all of them right... I thought you did\'t know me ' + username + '...')
    } else if (gotQuestionCorrect === 0) {
      alert('I mean, you got NOTHING right. If you had tried a little harder, I gave you an answer to a later question early on!');
    } else if (gotQuestionCorrect <= Math.floor(userBestPossibleScore / 2)) {
      alert('You win some, you lose some.');
    } else {
      alert('I hope you\'re content with that.');
    }*/