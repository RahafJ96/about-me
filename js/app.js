'use strict';

// Asking about the Name of the User , Age

let userName = prompt('Hello there! What is your name? ');
// console.log(userName);

while (!userName) {
    userName = prompt('really whats your name we\'ll need it later')
};

let age = prompt('How old are you?');
// console.log(age);

alert('Hope you have a good day ' + userName + '! You are ' + age + ' years old. Welcome !');

//Start the Guessing Game
let score = 0;

// Question 1
function question1() {
    let favColor = prompt('Is my favorite Color Blue ?');
favColor = favColor.toUpperCase()
if (favColor == 'YES' || favColor == 'Y') {
    alert('That\'s True! Blue is my favorite color');
    score++
    //console.log('That\'s True! Blue is my favorite color')

} else if (favColor == 'NO' || favColor == 'N') {
    alert('Wrong Asnwer, I like Blue')

}
}
question1();


// Question 2
function question2() {

    let favFood = prompt('Is my favourite food Pizza?!');
favFood = favFood.toUpperCase()
if (favFood == 'YES' || favFood == 'Y') {
    alert('Sorry, wrong answer');

} else if (favFood == 'NO' || favFood == 'N') {
    //console.log('Nice!')
    alert('Nice!')
    score++

}
}
question2();

// Question 3
function question3() {

    let favHobby = prompt('Do you think playing Piano is my hobby?');
favHobby = favHobby.toUpperCase()
if (favHobby == 'YES' || favHobby == 'Y') {
    //console.log('Yes it is, Good Job!')
    alert('Yes it is, Good Job!');
    score++

} else if (favHobby == 'NO' || favHobby == 'N') {
    alert('Oops, Wrong answer')

}
}
question3();

// Question 4
function question4() {
    let pet = prompt('Do i have a cat?');
    pet = pet.toUpperCase()
    if (pet == 'YES' || pet == 'Y') {
        alert('Nope, wrong answer');
        //console.log('Nope, wrong answer')
    
    } else if (pet == 'NO' || pet == 'N') {
        alert('True, I don\'t like Pets!');
        score++
    
    } 
}
question4();


// Question 5
function question5() {
    let favMovie = prompt('Do I like Movies?');
    favMovie = favMovie.toUpperCase()
    if (favMovie == 'YES' || favMovie == 'Y') {
        alert('You are correct! ');
        score++
    
    
    } else if (favMovie == 'NO' || favMovie == 'N') {
        alert('No, you are wrong');
        //console.log('Really, are you Human?')
    
    } 
}
question5();


// Quetion 6
function question6() {
    for (let i = 0; i < 4; i++) {
        let guessNumber = Number(prompt('Guess how old am I ?'));
        let myAge = 24;
        if (guessNumber === myAge) {
            alert("That\'s Right!");
            score++;
            break;
        } else if (guessNumber > myAge) {
            alert('too high');
        } else if (guessNumber < myAge) {
            alert('too low');
        } else {
            alert('Next time enter a number');
        }
        if (i === 3) {
            alert('I\'m 24 :D ');
        }
        console.log(i);
    }
}
question6();

//Quetion 7

function question7() {
    let movieType = ['action', 'drama', 'romantic', 'adventure', 'comedy', 'animation'];



let typesOfMovies = ""

// while (!typesOfMovies) {
//     typesOfMovies = prompt("Please guess my best movie type: 'Action','Drama','Romantic','Adventure','Comedy','Animation")
// }


q7: for (let i = 0; i < 6; i++) {

    typesOfMovies = prompt("Please guess my best movie type: 'Action','Drama','Romantic','Adventure','Comedy','Animation")

    for (let j = 0; j < movieType.length; j++) {
        // console.log('type', movieType[j])
        if (movieType[j] == typesOfMovies) {
            score++
            alert("That\'s True! I like this type too.")

            break q7
        }

    }

}




}
question7();

alert(`${userName}, your score is  ${score}/7.  Thanks for playing! `);


    // Information about each place 
    let education= `Luminus Technical University College (LTUC), Amman, Jordan — Software Development ----- German Jordanian University - bachelor degree in Electrical and Communication engineering \n -----   Hochschule Bremen, Bremen, Germany ---- Electrical engineering at the University of Bremen`
    
    let work= `Deutsche Telekom AG , Cologne, Germany — Intern in the department of the organization service (ORS) ---
    Orange Company, Amman, Jordan — Intern as web developer`
    
    let hobby= `Swimming, Playing Piano and Reading`
    
    let food= `Mansaf, Sushi and Shawirma`
    
    //  Geting element from the DOM about me
    let hobbieBox = document.querySelectorAll('.hobbie-box'),
     meInfo = document.querySelector('.about-me'),
     meInfoContainer = document.createElement('div'),
     meInfoClose = document.createElement('div'),
     meInfoImage = document.createElement('img'),
     meInfoText = document.createElement('p'),
     starsContainer = document.createElement('div');
    
    meInfoContainer.appendChild(meInfoImage);
    meInfoContainer.appendChild(meInfoText);
    meInfo.appendChild(meInfoContainer);
    meInfo.appendChild(meInfoClose);
    meInfo.appendChild(starsContainer);
    
    
    // adding eventListener for each search box
    hobbieBox.forEach(box =>    
    {
      box.addEventListener('click', function(e){
            
            // Choosing an Image
            let targetElement = null;
            if(e.target.classList.contains('hobbie-box__img'))
                targetElement = e.target;
            else
                // Choosing an Image if other selected
                targetElement = e.target.parentElement.firstElementChild;
    
            // Setting the src attrebute to the new img tag
             meInfoImage.setAttribute('src', targetElement.getAttribute('src'));
    
            // Attaching styling classes to elements
            meInfo.classList.add('displayed');
            meInfoContainer.classList.add('meInfocontainer');
            meInfoImage.classList.add('about-me__img');
            meInfoText.classList.add('about-me__text');
            meInfoClose.classList.add('about-me__close');
           
    
            // Geting the hobbie Name with its Information
            let infomeName = targetElement.nextElementSibling;
            // showing the hobbie img and some info based on the title
            if(infomeName.textContent.toLocaleLowerCase() === 'education'){
                meInfoText.textContent = '';
                meInfoText.appendChild(document.createTextNode(education));
            } else if(infomeName.textContent.toLocaleLowerCase() === 'work'){
                meInfoText.textContent = '';
                meInfoText.appendChild(document.createTextNode(work));
            } else if(infomeName.textContent.toLocaleLowerCase() === 'hobby'){
                meInfoText.textContent = '';
                meInfoText.appendChild(document.createTextNode(hobby));
            } else{
                meInfoText.textContent = '';
                meInfoText.appendChild(document.createTextNode(food));
            }
           
          document.write(getRating());
    
     
        });
    
    })
    
    // Closing the palce info popup handler
    document.addEventListener('click', function(e){
        if(e.target.classList.contains('about-me__close')){
            // close the popup window
            meInfo.classList.remove('displayed');
        
        }
    });







    
    // // Information about each place 
    // let london= `London is the capital and largest city of England and the United Kingdom. The city stands on the River Thames in the south-east of England, at the head of its 50-mile (80 km) estuary leading to the North Sea. London has been a major settlement for two millennia, and was originally called Londinium, which was founded by the Romans. The City of London, London's ancient core and financial centre—an area of just 1.12 square miles (2.9 km2) and colloquially known as the Square Mile—retains boundaries that closely follow its medieval limits.  The adjacent City of Westminster has for centuries been the location of much of the national government. Thirty-one additional boroughs north and south of the river also comprise modern London. The London region is governed by the mayor of London and the London Assembly.`
    
    // let eiffel= `The Eiffel tower is the trademark of Paris, France. With the tower being 984ft, it’s kind of hard not to notice it. The tower has a restaurant, radio and television transmitter and more. Gustave A. Eiffel created the tower to enter it in the worlds fair. It was made with wrought iron and had medium wind resistance. Gustave started in 1889 and completed in 1910. Gustave A. Eiffel created the Eiffel Tower. Eiffel oversaw the construction with such success that in 1866 he founded his own company and soon became known for his wrought iron structures. Starting in 1872 he attracted foreign contracts, and in 1877 he created over the Douro River in Porto, Portugal, a steel arch bridge 525 ft in height.`
    
    // let venice= `Venice, Italian Venezia, city, major seaport, and capital of both the provincia (province) of Venezia and the regione (region) of Veneto, northern Italy. An island city, it was once the centre of a maritime republic. It was the greatest seaport in late medieval Europe and the continent’s commercial and cultural link to Asia. Venice is unique environmentally, architecturally, and historically, and in its days as a republic the city was styled la serenissima (“the most serene” or “sublime”). It remains a major Italian port in the northern Adriatic Sea and is one of the world’s oldest tourist and cultural centres.
    // Today Venice is recognized as part of the artistic and architectural patrimony of all humanity, a fitting role for a city whose thousand-year economic and political independence was sustained by its role in global trading. The situation of the city on islands has limited modern suburban spread beyond the historic centre; its framework of canals and narrow streets has prevented the intrusion of automobiles; and its unmatched wealth of fine buildings and monuments dating from the period of commercial dominance has ensured a keen and almost universal desire for sensitive conservation.`
    
    // let tokyo= `Japan (Tokyo) is the capital of Japan and it has a population of 13 million people. Tokyo is a marvelous mix of modern living and old-fashioned manners, slick high-tech gadgets and cutesy cartoon mascots. It's terribly crowded, yet can be strangely quiet. It's home to the understated, and the wacky, and you often find them right next to each other on the sidewalk. Tokyo was originally a small fishing village named Edo, now it is modern city and hosts 51 of the Fortune Global 500 companies, the highest number of any city.
    // The weather there will be cold and we should wear coat, scarfs, gloves and boots.
    // As I have read there is a deeper respect for there elders and they high regard for foreigners. They have one of the most advanced tsunami early warning system in the world. We find it more economical to exchange currency before we leave.
    // Here are best plans for visiting plans:
    // 1. Meiji Shrine: is a Shinto shrine located in the Shibuya Ward, in the middle of a beautiful forest with huge Torii gates leading to the main hall and it is accessible from the Harajuku Station on the JR Yamanote Line.
    // 2. Yoyogi Park on a Sunday: is the best to observe local customs.
    // 3. Zojoji Temple: is a Buddhist temple`
    
    // let cologne_cathedral= `Cologne Cathedral is a building of superlatives that is the centre and hallmark of this city on the Rhine. The cornerstone of this Gothic cathedral was laid on the Feast of the Assumption of Mary on 15 August 1248. The previous building was apparently no longer deemed impressive enough to house the remains of the Three Wise Men, which Archbishop Rainald von Dassel had brought to Cologne from Milan after the latter city was conquered in 1164. Because of these relics, the cathedral became one of the most important places of pilgrimage in Europe. Its two massive towers have dominated the city’s skyline since their completion in 1880. At 157.38 metres, the northern tower is 7cm taller than the southern one.
    // Today the cathedral is Cologne’s second-tallest structure, surpassed only by the telecommunications tower. The cathedral covers almost 8,000 square metres of floor space and can hold more than 20,000 people. Due to the building’s impressive Gothic architecture, the shrine of the Three Wise Men, the outstanding stained-glass windows and the many other important works of art, UNESCO declared Cologne Cathedral a World Heritage Site in 1996.`
    
    
    // //  Geting element from the DOM
    // let searchBox = document.querySelectorAll('.search-box'),
    //  travelInfo = document.querySelector('.about-me'),
    //  travelInfoContainer = document.createElement('div'),
    //  travelInfoClose = document.createElement('div'),
    //  travelInfoImage = document.createElement('img'),
    //  travelInfoText = document.createElement('p');
    
    // travelInfoContainer.appendChild(travelInfoImage);
    // travelInfoContainer.appendChild(travelInfoText);
    // travelInfo.appendChild(travelInfoContainer);
    // travelInfo.appendChild(travelInfoClose);
    
    
    // // adding eventListener for each search box
    // searchBox.forEach(box =>
    
    // {
    //   box.addEventListener('click', function(e){
            
    //         // Choosing an Image
    //         let targetElement = null;
    //         if(e.target.classList.contains('search-box__img'))
    //             targetElement = e.target;
    //         else
    //             // Choosing an Image if other selected
    //             targetElement = e.target.parentElement.firstElementChild;
    
    //         // Setting the src attrebute to the new img tag
    //          travelInfoImage.setAttribute('src', targetElement.getAttribute('src'));
    
    //         // Attaching styling classes to elements
    //         travelInfo.classList.add('displayed');
    //         travelInfoContainer.classList.add('travelInfocontainer');
    //         travelInfoImage.classList.add('about-me__img');
    //         travelInfoText.classList.add('about-me__text');
    //         travelInfoClose.classList.add('about-me__close');
           
    
    //         // Geting the hobbie Name with its Information
    //         let searchName = targetElement.nextElementSibling;
    //         // showing the hobbie img and some info based on the title
    //         if(searchName.textContent.toLocaleLowerCase() === 'london'){
    //             travelInfoText.textContent = '';
    //             travelInfoText.appendChild(document.createTextNode(london));
    //         } else if(searchName.textContent.toLocaleLowerCase() === 'eiffel'){
    //             travelInfoText.textContent = '';
    //             travelInfoText.appendChild(document.createTextNode(eiffel));
    //         } else if(searchName.textContent.toLocaleLowerCase() === 'venice'){
    //             travelInfoText.textContent = '';
    //             travelInfoText.appendChild(document.createTextNode(venice));
    //         } else if(searchName.textContent.toLocaleLowerCase() === 'tokyo'){
    //             travelInfoText.textContent = '';
    //             travelInfoText.appendChild(document.createTextNode(tokyo));
    //         } else{
    //             travelInfoText.textContent = '';
    //             travelInfoText.appendChild(document.createTextNode(cologne_cathedral));
    //         }
           
    //       document.write(getRating());
    
     
    //     });
    
    // })
    
    
    
    // // Closing the palce info popup handler
    // document.addEventListener('click', function(e){
    //     if(e.target.classList.contains('about-me__close')){
    //         // close the popup window
    //         travelInfo.classList.remove('displayed');
    //                 }
    // });