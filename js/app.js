'use strict';

// Asking about the Name of the User , Age

let userName = prompt('Hello there! What is your name? ');
console.log(userName);

while (!userName) {
    userName = prompt('really whats your name we\'ll need it later')
};

let age = prompt('How old are you?');
console.log(age);

alert('Hope you have a good day ' + userName + '! You are ' + age + ' years old. Welcome !');

//Start the Guessing Game
let score = 0;

let favColor = prompt('Is my favorite Color Blue ?');
favColor = favColor.toUpperCase()
if (favColor == 'YES' || favColor == 'Y') {
    alert('That\'s True! Blue is my favorite color');
    score++
    //console.log('That\'s True! Blue is my favorite color')

} else if (favColor == 'NO' || favColor == 'N') {
    alert('Wrong Asnwer, I like Blue')

}
let favFood = prompt('Is my favourite food Pizza?!');
favFood = favFood.toUpperCase()
if (favFood == 'YES' || favFood == 'Y') {
    alert('Sorry, wrong answer');

} else if (favFood == 'NO' || favFood == 'N') {
    //console.log('Nice!')
    alert('Nice!')
    score++

}
let favHobby = prompt('Do you think playing Piano is my hobby?');
favHobby = favHobby.toUpperCase()
if (favHobby == 'YES' || favHobby == 'Y') {
    //console.log('Yes it is, Good Job!')
    alert('Yes it is, Good Job!');
    score++

} else if (favHobby == 'NO' || favHobby == 'N') {
    alert('Oops, Wrong answer')

}
let pet = prompt('Do i have a cat?');
pet = pet.toUpperCase()
if (pet == 'YES' || pet == 'Y') {
    alert('Nope, wrong answer');
    //console.log('Nope, wrong answer')

} else if (pet == 'NO' || pet == 'N') {
    alert('True, I don\'t like Pets!');
    score++

}
let  favMovie= prompt('Do I like Movies?');
favMovie = favMovie.toUpperCase()
if (favMovie == 'YES' || favMovie == 'Y') {
    alert('You are correct! ');
    score++
    

} else if (favMovie == 'NO' || favMovie == 'N') {
    alert('No, you are wrong');
    //console.log('Really, are you Human?')

}

let travel = prompt('Do you think I like to Travel?');
travel = travel.toUpperCase()
if (travel == 'YES' || travel == 'Y') {
    alert('YES' + ' ' + userName + ' ' + ',everyone wants to travel! ');
    score++
    //console.log('YES' + ' ' + userName + ' ' + ',everyone wants to travel! ')

} else if (travel == 'NO' || travel == 'N') {
    alert('Really, are you Human?');
    //console.log('Really, are you Human?')

}

let guessNumber = prompt("Guess how old am I ?")
while (!guessNumber) {
    guessNumber = prompt("Please guess my age")
}
for (let i = 0; i < 3; i++) {

    if (guessNumber > 24) {
        alert("It is too high")
        guessNumber = prompt("Try Again")
    } else if (guessNumber < 24) {
        alert("It is too low")
        guessNumber = prompt("Try Again")
    } else if (guessNumber === 24) {
        alert("That\'s Right!")
        score++
        break
    }
}

let movieType=['action','drama','romantic','adventure','comedy','animation'];


let typesOfMovies=prompt("Please guess my best movie type: 'Action','Drama','Romantic','Adventure','Comedy','Animation'")

while (!typesOfMovies) {
    typesOfMovies = prompt("Best type of movies?")
 }

 for (let i = 0; i < 6; i++) {

    for(let j=0; j < movieType.length;j++){
        
      if (movieType[j] == typesOfMovies){
        console.log('type',movieType[j])
        score++
        break
      }
      
    }
    
  }


alert(`${userName}, your score is  ${score}/7.  Thanks for playing! `);
