'use strict'

const alphabet = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const answers = [
    ["sloans lake", "chipotle", "stenger"],
    ["lord of the rings", "we are the titans", "the avengers"],
    ["avery hazyish", "bud light", "sippin pretty"]
];
let guesses = [ ];
let word; 
let letterItem;
let correct;
let letters;
let drawArray;
let context;
let showLives = document.getElementById('mylives');
let getHint = document.getElementById('hint');
let showClue = document.getElementById('clue')
let lives = 10;
let counter = 0;
let space = 0;


// create alphabet ul
let buttons = function() {
    let myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');

    letters.innerHTML = '<li>hi</li> <li>bye</li>'
 

    for (let i = 0; i < alphabet.length; i++) {

        letterItem = document.createElement('li');
        letterItem.innerHTML = alphabet[i];

        check(); 
   
        letters.appendChild(letterItem);
      
    }     

    //    const joshsName = document.createElement('p')
    // joshsName.innerHTML = 'hi i am josh'

    // letters.appendChild(joshsName);

    // const alex = document.createElement('p')
    // alex.innerHTML = 'hi i am alex'

    // letters.appendChild(alex);

 

    myButtons.appendChild(letters);
}

// Select a Category 


console.log('answers.length: ',answers.length)
const RandomNumberBetweenZeroAndOne = Math.random()
const RandomDecimalInMyLength = RandomNumberBetweenZeroAndOne * answers.length
const indexOfTheRandomItemThatIWant = Math.floor(RandomDecimalInMyLength)

let chosenAnswer = answers[indexOfTheRandomItemThatIWant]
console.log('math.random: ',randNUmber)
console.log('mltipl together', answers.length *randNUmber)

console.log('and then floor', Math.floor(answers.length *randNUmber))

let chosenAnswer = answers[Math.floor(Math.random() * answers.length];
word = chosenAnswer[Math.floor(Math.random() * chosenAnswer.length)];
console.log(word); 

let selectCat = function() {    
       if (chosenAnswer === answers[0]) {
        categoryName.innerHTML = "The Category is Our Favorite Places";
    } else if (chosenAnswer === answers[1]) {
        categoryName.innerHTML = "The Category is Movies";
    } else if (chosenAnswer === answers[2]) {
        categoryName.innerHTML = "The Category is Beer";
    }
}

// Create guesses ul
let result = function() {
    let wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');
    
    for (let i = 0; i < word.length; i++){
        correct.setAttribute('id', 'my-word');
        let guess = document.createElement('li');
        guess.setAttribute('class', 'guess');
        if (word[i] === " ") {
            guess.innerHTML = " ";
            space = 1;
        } else {
            guess.innerHTML = "_";
        }

        guesses.push(guess);
        wordHolder.appendChild(correct);
        correct.appendChild(guess);
    }
}

//Show Lives
let comments = function () {
    showLives.innerHTML = "You Have " + lives + " Lives";
    if (lives < 1) {
        showLives.innerHTML = "Game Over";
    } 
      for (let i = 0; i < guesses.length; i++)
      if (counter + space === guesses.length) {
          showLives.innerHTML = "You Win!" //Not working 
      }
}



// OnClick Function
let check = function () {
    letterItem.onclick = function () {
        let guess = (this.innerHTML);
        this.setAttribute("class", "active")
        this.onclick = null;
        for (let i = 0; i < word.length; i++) {
            if (word[i] === guess) {
                guesses[i].innerHTML = guess;
                counter +=1;
            }
        }
        let j = (word.indexOf(guess));
        if (j === -1) {
            lives -= 1;
            comments();
        } else {
            comments();
        }
    }
}

// Play
let play = function () {
    buttons();
    
    selectCat();
    result();
    comments();
}

play();

// Hint

getHint.onclick = function () {
    let hints = [
        ["Where our first home is located", "A popular mexican restaraunt", "The best spot to get ice cream"],
    ["Straight Out The Shire", "A football movie filled with racial challenges", "Super Heros"],
    ["A thick and sweet beer brewed in Boulder, CO", "Classic baseball beer", "Pink beer brewed in Colorado"]
    ];

    let categoryIndex = answers.indexOf(chosenAnswer);
    let hintIndex = chosenAnswer.indexOf(word);
    showClue.innerHTML = "Clue: - " + hints [categoryIndex][hintIndex];
}; 

// Reset
document.getElementById('reset').onclick = function () {
   window.location.reload();
}