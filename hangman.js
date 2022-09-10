'use strict'

const alphabet = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const answers = [
    ["london", "casa bonita", "honolulu"],
    ["lord of the rings", "we are the titans", "ragnarok"],
    ["avery", "budweiser", "odell"]
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

    for (let i = 0; i < alphabet.length; i++) {

        letterItem = document.createElement('li');
        letterItem.innerHTML = alphabet[i];

        check(); 
   
        letters.appendChild(letterItem);
      
    }     

    myButtons.appendChild(letters);
}

// Select a Category 


console.log('answers.length: ',answers.length)
const RandomNumberBetweenZeroAndOne = Math.random()
const RandomDecimalInMyLength = RandomNumberBetweenZeroAndOne * answers.length
const indexOfTheRandomItemThatIWant = Math.floor(RandomDecimalInMyLength)

let chosenAnswer = answers[Math.floor(Math.random()) * answers.length];
word = chosenAnswer[Math.floor(Math.random() * chosenAnswer.length)];
console.log(word); 

let selectCat = function() {    
       if (chosenAnswer === answers[0]) {
        categoryName.innerHTML = "The Category is Places";
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

// Animate man
var animate = function () {
    var drawMe = lives ;
    drawArray[drawMe]();
}

// Hangman
let head = function(){
      let myStickman = document.getElementById("stickman");
      let context = myStickman.getContext('2d');
      context.beginPath();
      context.arc(60, 25, 10, 0, Math.PI*2, true);
      context.stroke();
}
    
  let draw = function(pathFromx, pathFromy, pathTox, pathToy) {
    let myStickman = document.getElementById("stickman");
    let context = myStickman.getContext('2d');
    context.beginPath();
    context.strokeStyle = "#fff";
    context.lineWidth = 2;
    context.moveTo(pathFromx, pathFromy);
    context.lineTo(pathTox, pathToy);
    context.stroke(); 
}

   let frame1 = function() {
     draw (0, 150, 150, 150);
   };
   
   let frame2 = function() {
     draw (10, 0, 10, 600);
   };
  
   let frame3 = function() {
     draw (0, 5, 70, 5);
   };
  
   let frame4 = function() {
     draw (60, 5, 60, 15);
   };
  
   let torso = function() {
     draw (60, 36, 60, 70);
   };
  
   let rightArm = function() {
     draw (60, 46, 100, 50);
   };
  
   let leftArm = function() {
     draw (60, 46, 20, 50);
   };
  
   let rightLeg = function() {
     draw (60, 70, 100, 100);
   };
  
   let leftLeg = function() {
     draw (60, 70, 20, 100);
   };
  
  drawArray = [rightLeg, leftLeg, rightArm, leftArm,  torso,  head, frame4, frame3, frame2, frame1]; 


// OnClick Function
let check = function () {
    letterItem.onclick = function () {
        if (lives > 0) {
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
            animate(); 
        } else {
            comments();
        }
    } 
} 

};

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
    ["The captial of England", "A popular mexican restaraunt in Denver", "The largest city in Hawaii"],
    ["Straight Out The Shire", "A football movie filled with racial challenges", "Super Heros"],
    ["Located in Boulder,CO. Known for beers like Little Rascal", "A classic brewery considered a favorite among Mid-West baseball fans", "A brewry known for beers like Sippin' Pretty"]
    ];

    let categoryIndex = answers.indexOf(chosenAnswer);
    let hintIndex = chosenAnswer.indexOf(word);
    showClue.innerHTML = "Clue: - " + hints [categoryIndex][hintIndex];
}; 

// Reset
document.getElementById('reset').onclick = function () {
   window.location.reload();
}