
const modalTriggerButtons = document.querySelectorAll("[data-modal-target]");
const modals = document.querySelectorAll(".modal");
const modalCloseButtons = document.querySelectorAll(".modal-close");


modalTriggerButtons.forEach(elem => {
	elem.addEventListener("click", event => toggleModal(event.currentTarget.getAttribute("data-modal-target")));
});


modalCloseButtons.forEach(elem => {
	elem.addEventListener("click", event => toggleModal(event.currentTarget.closest(".modal").id));
});


modals.forEach(elem => {
	elem.addEventListener("click", event => {
	if(event.currentTarget===event.target) toggleModal(event.currentTarget.id);
	});
});

document.addEventListener("keydown", event => {
	if(event.keyCode===27 && document.querySelector(".modal.modal-show")){
		toggleModal(document.querySelector(".modal.modal-show").id);
	}
});


function toggleModal(modalId) {
	const modal = document.getElementById(modalId);


	if(window.getComputedStyle(modal).display ==="flex"){
		modal.classList.add("modal-hide");
		setTimeout(() => {
			modal.style.display = "none";
			modal.classList.remove("modal-show", "modal-hide");
			document.body.style.overflow = "initial";
		}, 200);
		
	}
	else{
		modal.style.display = "flex";
		modal.classList.add("modal-show");
		document.body.style.overflow = "hidden";
	}
}


// var questions = [
//      {
//            prompt: "What is Monica’s biggest pet peeve?\n(A) Animals dressed as humans\n\ (B) Rearranging her furniture\n(C) Dirty apartments",
//            answer: "a"
//      },
//      {
//           prompt: "According to Chandler, what phenomenon scares the bajesus out of him?\n(A) Clowns\n\ (B) Goldfish Crackers\n(C) Michael Flatley Lord of the Dance",
//           answer: "c"
//      },
//      {
//           prompt: "Who pees on Monica’s leg when she gets stung by a jellyfish?\n(A) Joey\n\ (B) Ross\n(C) Chandler",
//           answer: "a"
//      }
// ];

// var indexCardOne = document.querySelector(".card_one_fears_btn");

// indexCardOne.addEventListener("click", runQuestions, false);

// function runQuestions(e){
// 	var clickedItem = e.target.element;
// 	for(var i = 0; i < questions.length; i++){
//      var response = window.prompt(questions[i].prompt);
//      if(response == questions[i].answer){
//           score++;
//           alert("Correct!");
//      } else {
//           alert("Sorry, that's incorrect!");
//      }
// }
// alert("you got " + score + "/" + questions.length);
	
// }
// // console.log(questions);

// var score = 0;




// var questions = [
//      {
//            prompt: "What is the name of Ross’ first wife?\n(A) Emily\n\ (B) Susan\n(C) Carol",
//            answer: "c"
//      },
//      {
//           prompt: "What was the original name of the show?\n(A) Central Perk\n\ (B) Insomnia Cafe\n(C) Monk's Cafe",
//           answer: "b"
//      },
//      {
//           prompt: "Who was Rachel supposed to marry in the pilot episode?\n(A) Barry\n\ (B) Larry\n(C) Joshua",
//           answer: "a"
//      }
// ];

// var indexCardOne = document.querySelector(".card_one_ancient");

// indexCardOne.addEventListener("click", runQuestions, false);

// function runQuestions(e){
// 	var clickedItem = e.target.element;
// 	for(var i = 0; i < questions.length; i++){
//      var response = window.prompt(questions[i].prompt);
//      if(response == questions[i].answer){
//           score++;
//           alert("Correct!");
//      } else {
//           alert("Sorry, that's incorrect!");
//      }
// }	
// 	alert("You got " + score + "/" + questions.length);
	
// }
// // console.log(questions);

// var score = 0;



// var questions = [
//      {
//            prompt: "Every week the TV Guide comes to Chandler and Joey’s apartment, what name appears on the address label?\n(A) Joey Tribiani\n\ (B) Chandler Bing\n(C) Miss Chanandler Bong",
//            answer: "c"
//      },
//      {
//           prompt: "What was the name of the self-help book that the girls loved?\n(A) Be Your Own Windkeeper\n\ (B) Lady in the Wind\n(C) Stand Up For Yourself",
//           answer: "a"
//      },
//      {
//           prompt: "What book did Joey keep in the freezer?\n(A) IT\n\ (B) Little Women\n(C) The Shining",
//           answer: "c"
//      }
// ];

// var indexCardOne = document.querySelector(".card_one_literature");

// indexCardOne.addEventListener("click", runQuestions, false);

// function runQuestions(e){
// 	var clickedItem = e.target.element;
// 	for(var i = 0; i < questions.length; i++){
//      var response = window.prompt(questions[i].prompt);
//      if(response == questions[i].answer){
//           score++;
//           alert("Correct!");
//      } else {
//           alert("Sorry, that's incorrect!");
//      }
// }	
// 	alert("You got " + score + "/" + questions.length);
	
// }
// // console.log(questions);

// var score = 0;


// var questions = [
//      {
//            prompt: "Monica and I had a grandmother that died, you both went to her funeral…. Name that grandmother?\n(A) Gladys\n\ (B) Althea\n(C) Nana",
//            answer: "b"
//      },
//      {
//           prompt: "What is the name of Chandler’s father’s Las Vegas all-male burlesque?\n(A) Men's Restroom\n\ (B) The Toolbox\n(C) Viva Las Gaygus",
//           answer: "c"
//      },
//      {
//           prompt: "To get over Richard, what did Monica start making?\n(A) Jam\n\ (B) Pies\n(C) Donuts",
//           answer: "a"
//      }
// ];

// var indexCardOne = document.querySelector(".card_one_relative");

// indexCardOne.addEventListener("click", runQuestions, false);

// function runQuestions(e){
// 	var clickedItem = e.target.element;
// 	for(var i = 0; i < questions.length; i++){
//      var response = window.prompt(questions[i].prompt);
//      if(response == questions[i].answer){
//           score++;
//           alert("Correct!");
//      } else {
//           alert("Sorry, that's incorrect!");
//      }
// }	
// 	alert("You got " + score + "/" + questions.length);
	
// }
// // console.log(questions);

// var score = 0;




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