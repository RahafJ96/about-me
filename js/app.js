'use strict';

// Asking about the Name of the User , Age

       let userName=prompt('Hello there! What is your name? ');
       console.log(userName);

       while (!userName) { 
       userName = prompt('really whats your name we\'ll need it later')};

       let age=prompt('How old are you?');
        console.log(age);

alert('Hope you have a good day '+ userName+ '! You are '+ age + ' years old. Welcome !');

//Start the Guessing Game

let favColor = prompt('Is my favorite Color Blue ?');
favColor = favColor.toUpperCase()
if (favColor == 'YES' || favColor == 'Y') {
    alert('That\'s True! Blue is my favorite color');
    //console.log('That\'s True! Blue is my favorite color')

} else if (favColor== 'NO' || favColor == 'N') {
    alert('Wrong Asnwer, I like Blue')

}
var favFood = prompt('Is my favourite food Pizza?!');
favFood = favFood.toUpperCase()
if (favFood == 'YES' || favFood == 'Y') {
       alert('Sorry, wrong answer');

} else if (favFood == 'NO' || favFood == 'N') {
    //console.log('Nice!')
    alert('Nice!')

}
var favHobby = prompt('Do you think playing Piano is my hobby?');
favHobby = favHobby.toUpperCase()
if (favHobby == 'YES' || favHobby == 'Y') {
    //console.log('Yes it is, Good Job!')
    alert('Yes it is, Good Job!');

} else if (favHobby == 'NO' || favHobby == 'N') {
    alert('oops, Wrong answer')

}
var pet = prompt('Do i have a cat?');
pet = pet.toUpperCase()
if (pet == 'YES' || pet == 'Y') {
    alert('Nope, wrong answer');
    //console.log('Nope, wrong answer')

} else if (pet == 'NO' || pet == 'N') {
    alert('True, I don\'t like Pets!');

}
var travel = prompt('Do you think I like to Travel?');
travel = travel.toUpperCase()
if (travel == 'YES' || travel == 'Y') {
   alert('YES' + ' ' + userName + ' ' + ',everyone wants to travel! ');
    //console.log('YES' + ' ' + userName + ' ' + ',everyone wants to travel! ')

} else if (travel == 'NO' || travel == 'N') {
       alert('Really, are you Human?');
       //console.log('Really, are you Human?')

}