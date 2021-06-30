// inspired by //https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a//3cca9548cebe5975d7ebca6a85
const input = require("readline-sync");
let info = input.question("Enter a word to score: ");
const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};
function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	 for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
}

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
    console.clear();
    console.log("let's play some scrabble!\n").toLowerCase();
    word = input.question('Enter a word to score: ').toLowerCase();
     while (!word.match([a-z]  || !word ===isNaN)) {
       console.clear();
       word = input.question('INVALID WORD\n\nPlease, this time, enter a real word to score: \n');
     }
     console.clear();
};


/*let simpleScore;

let vowelBonusScore;

let scrabbleScore;*/

const scoringAlgorithms = [];
const scoringAlgorithmsimple = {
    name: "simple Scoring",
    description: "this function counts all the letters and gives a score of +1 to each letter in the given word.",
    scoringFunction: simpleScore
  };

  const scoringAlgorithmVowelBonus = {
    name: "Vowel Bonus Scoring",
    description: "Scores vowels at +3 points, and consonants at +1.",
    scoringFunction: vowelBonusScore
  };
  const scoringAlgorithmScrabble = {
    name: "Scrabble Point Scoring",
    description: "Scores each word by individual letter point value based upon original scrabble point values.",
    scoringFunction: scrabbleScorer
  };

  const scoringAlgorithms = [scoringAlgorithmSimple,scoringAlgorithmVowelBonus, scoringAlgorithmScrabble]

  const oldPointStructure = {
    0: [' '],
    1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
    2: ['D', 'G'],
    3: ['B', 'C', 'M', 'P'],
    4: ['F', 'H', 'V', 'W', 'Y'],
    5: ['K'],
    8: ['J', 'X'],
   10: ['Q', 'Z']
  };

  let newPointStructure = transform(oldPointStructure);



function scorerPrompt() {
    console.log("How would you like to score this words?\n");
    for (i = 0; i < scoringAlgorithms.length; i++) {
      console.log(`${[i + 1]} ${scoringAlgorithms[i].name}\n${scoringAlgorithms[i].description}\n`);
    }
    selection = input.question("Select a choice from above: \n");
  }


function transform() {
    while ((selection - 1) >= scoringAlgorithms.length || isNaN(selection)) {
      console.clear();
      console.log("That is not number or a valid choice from above. Select again:\n")
       for (i = 0; i < scoringAlgorithms.length; i++) {
         console.log(`${[i + 1]} ${scoringAlgorithms[i].name}\n`)
       }
       selection = input.question("Select a choice from above: \n");
    }
    console.clear();
    return scoringAlgorithms[selection - 1].scoringFunction(word);
  };

let newPointStructure;
  function transform(lettersByScore) {
    const scoreByLetter = {};
    for (let score in lettersByScore) {
      let letters = lettersByScore[score];
      for (let i = 0; i < letters.length; i++) {
        scoresByLetter[letters[i].toLowercase()] = Number(score)
      }
    }
    return scoreByLetter;
  };

function runProgram() {
   initialPrompt();
   scorerPrompt();
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

