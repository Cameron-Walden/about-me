'use strict'

let userName = prompt("Welcome to my About Me page! What's your name?");
// console.log(userName);


/*let firstQuestion = prompt("Hey " + userName + "! I'm gonna ask you a few questions now before you can enter. Is that ok with you?");
// console.log(firstQuestion);

if(firstQuestion == "Yes" || firstQuestion == "yes") {
    alert("cool! Let's do it");
} else if(firstQuestion == "No" || firstQuestion == "no") {
    alert("If you don't wanna play the game, why are you here?");
} else {
    alert("Yes or no only, pal");
}

let secondQuestion = prompt("Alright- Did I originally go to culinary school?");
// console.log(secondQuestion)

if(secondQuestion == "No" || secondQuestion == "no") {
    alert("I enjoy cooking, but youre right. I didn't go to school for it.")
} else if(secondQuestion == "Yes" || secondQuestion == "yes") {
    alert("Hmm...Once you get into my page, read up a bit more about me")
} else {
    alert("We're playing this game whether you like it or not.")
}

let thirdQuestion = prompt("Ok, can you can guess where I worked?");
// console.log(thirdQuestion);

if(thirdQuestion == "Stumptown" || thirdQuestion == "stumptown" ) {
    alert("You're right! I did work there for awhile. I liked that job a lot!")
} else {
    alert("Nope...never worked there.")
}

let fourthQuestion = prompt("Alright " + userName + ", do I have a dog, cat, or iguana?");
// console.log(fourthQuestion);

if(fourthQuestion == "Dog" || fourthQuestion == "dog") {
    alert("Yep! I have an awesome dog named Donte!");
} else if(fourthQuestion == "Cat" || fourthQuestion == "cat") {
    alert("Nope. I don't have a cat");
} else if(fourthQuestion == "Iguana" || fourthQuestion == "iguana"){
    alert("Nope! But iguanas are pretty cool!");
} else {
    alert("Didn't you read what I asked you?");
}

let fifthQuestion = prompt("Alright " + userName + ", last question for you. What's one of my favorite graphic novels?");
// console.log(fifthQuestion)

if(fifthQuestion == "Sandman" || fifthQuestion == "sandman") {
    alert("You're right! That series is amazing. Have you ever read it?");
} else if(fifthQuestion == "Swamp Thing") {
    alert("I like that one a lot too...but how did you know? I didn't write about it anywhwere...");
} else if(fifthQuestion == "Watchmen"){
    alert("Ya...But how'd you know that?");
} else {
    alert("Check out my page to see what book I like!")
}

//Should've paid closer to attention to the part that said make "yes or no" questions haha. Keeping these here for now.

let finalMessage = alert("All done with the questions. Take a look around!")*/

let firstQuestionOriginal = prompt('Hi ' + userName + '. Before you come in, let\'s play a guessing game. Ok- first Question- Did I originally go to culinary school?');
// console.log(dfirstQuestionOriginal);
let firstQuestion = firstQuestionOriginal.toLowerCase();
console.log(firstQuestion);

if (firstQuestion === 'yes' || firstQuestion === 'y') {
  alert('I enjoy cooking, but I didn\'t go to school for it. Have you seen Roadrunner?')
} else if (firstQuestion=== 'no' || firstQuestion === 'n') {
  alert('You\'re right! I originally went to school for music!');
} else {
  alert("We're playing this game whether you like it or not " + userName + '.')
}

let secondQuestionOriginal = prompt('Did I ever work at Stumptown?');
let secondQuestion = secondQuestionOriginal.toLowerCase();


if (secondQuestion == 'yes' || secondQuestion == 'y') {
    // console.log('I did! I enjoyed that job a lot.')
  alert('I did! I enjoyed that job a lot.')
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
} else {
    // console.log('Come on ' + username + '. This isn\'t the first time we\'ve been through this. I wanted a simple yes or no.');
  alert('Come on ' + userName + '. This isn\'t the first time we\'ve been through this. I wanted a simple yes or no.');
}

let fourthQuestionOriginal = prompt('Do you think I like graphic novels?');
let fourthQuestion = fourthQuestionOriginal.toLowerCase();

if (fourthQuestion == 'yes' || fourthQuestion == 'y') {
    // console.log('You\'re right! One of my favorites is The Sandman series by Neil Gaiman!)
  alert('You\'re right! One of my favorites is The Sandman series by Neil Gaiman!')
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
} else if (fifthQuestion == 'no' || fifthQuestion == 'n') {
    // console.log('Well, looks like somebody got a wrong answer!')
  alert('Well, looks like somebody got a wrong answer!');
} else {
    // console.log('Ok fine, just go in' + userName + '.')
  alert('Ok fine, just go in ' + userName + '.')
}

let finalMessage = alert('All done with the questions ' + userName + '. Take a look around!');