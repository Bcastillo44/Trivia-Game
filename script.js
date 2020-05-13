

var questions = [
     {
           prompt: "What is Monica’s biggest pet peeve?\n(A) Animals dressed as humans\n\ (B) Rearranging her furniture\n(C) Dirty apartments",
           answer: "a"
     },
     {
          prompt: "According to Chandler, what phenomenon scares the bajesus out of him?\n(A) Clowns\n\ (B) Goldfish Crackers\n(C) Michael Flatley Lord of the Dance",
          answer: "c"
     },
     {
          prompt: "Who pees on Monica’s leg when she gets stung by a jellyfish?\n(A) Joey\n\ (B) Ross\n(C) Chandler",
          answer: "a"
     }
];

var indexCardOne = document.querySelector(".card_one_fears");

indexCardOne.addEventListener("click", runQuestions, false);

function runQuestions(e){
	var clickedItem = e.target.element;
	for(var i = 0; i < questions.length; i++){
     var response = window.prompt(questions[i].prompt);
     if(response == questions[i].answer){
          score++;
          alert("Correct!");
     } else {
          alert("Sorry, that's incorrect!");
     }
}
alert("you got " + score + "/" + questions.length);
	
}
// console.log(questions);

var score = 0;




var questions = [
     {
           prompt: "What is the name of Ross’ first wife?\n(A) Emily\n\ (B) Susan\n(C) Carol",
           answer: "c"
     },
     {
          prompt: "What was the original name of the show?\n(A) Central Perk\n\ (B) Insomnia Cafe\n(C) Monk's Cafe",
          answer: "b"
     },
     {
          prompt: "Who was Rachel supposed to marry in the pilot episode?\n(A) Barry\n\ (B) Larry\n(C) Joshua",
          answer: "a"
     }
];

var indexCardOne = document.querySelector(".card_one_ancient");

indexCardOne.addEventListener("click", runQuestions, false);

function runQuestions(e){
	var clickedItem = e.target.element;
	for(var i = 0; i < questions.length; i++){
     var response = window.prompt(questions[i].prompt);
     if(response == questions[i].answer){
          score++;
          alert("Correct!");
     } else {
          alert("Sorry, that's incorrect!");
     }
}	
	alert("You got " + score + "/" + questions.length);
	
}
// console.log(questions);

var score = 0;







// const questions = [
//   {
//     question: 'What is Monica’s biggest pet peeve?',
//     answers: [
//       { text: 'Animals dressed as humans', correct: true },
//       { text: 'Rearranging her furniture', correct: false },
//       { text: 'Dirty apartments', correct: false}
//     ]
//   }
//  ]

// function startQuestions(){
	
// }

// function myFunction() {
//   document.querySelector(".card").innerHTML = "What is Monica’s biggest pet peeve?";
// }




// const startButton = document.getElementById('start-button')
// const nextButton = document.getElementById('next-button')


// startButton.addEventListener('click', startGame)
// nextButton.addEventListener('click', () => {
//   currentQuestionIndex++
//   setNextQuestion()
// })

// function startGame() {
//   startButton.classList.add('hide')
//   shuffledQuestions = questions.sort(() => Math.random() - .5)
//   currentQuestionIndex = 0
//   questionContainerElement.classList.remove('hide')
//   setNextQuestion()
// }

// const cardButton = document.querySelector('.card')

// document.addEventListener('click', startQuestions, true);