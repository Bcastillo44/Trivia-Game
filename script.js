
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

const questionText = document.querySelector(".Question");

const optionBox = document.querySelector(".Option-box");

const nextQuestionBtn = document.querySelector(".next-question-btn");

const correctAnswers = document.querySelector(".correct-answers");

const seeResultBtn = document.querySelector(".see-result-btn");

const remainingTime = document.querySelector(".remaining-time");


let myArray = [];

let questionIndex = 0;

let score = 0;

let number = 0;

let interval;


triviaApp = 
	[

  		{

    question: 'What is Monica’s biggest pet peeve?',
    options: ['Animals dressed as humans', 'Rearranging her furniture', 'Dirty apartments'],
    answer: 0

		},


		 {

      question: 'According to Chandler, what phenomenon scares the bajesus out of him?',
      options: ['Janice','Clowns', 'Michael Flatley Lord of the Dance'],
      answer: 2

     	},
     	 {

      question: 'Who pees on Monica’s leg when she gets stung by a jellyfish?',
      options: ['Chandler','Joey', 'Ross'],
      answer: 1

     	},
     	 {

      question: 'What was the name of the man who bared an uncanny resemblance to Ross?',
      options: ['Russ','Barry', 'Larry'],
      answer: 0

     	},
     	 {

      question: 'Why did Phoebe want to put Joey’s “head through a wall"?',
      options: ['He broke her guitar by accident', "He can't act" , 'He couldn’t speak French'],
      answer: 2

     	},
     	 {

      question: 'Which one of Joey’s sisters did Chandler fool around with at Joey’s birthday party?',
      options: ['Mary Catherine','Mary Angela', 'Mary Theresa'],
      answer: 1

     	},
     	 {

      question: 'What caused the fire in Phoebe and Rachel’s apartment?',
      options: ['Rachel’s hair straightener',"Phoebe's candles", 'Carol Baskin'],
      answer: 0

     	},
     	 {

      question: 'When Phoebe changed her name to Princess Consuela, what did Mike change his name to?',
      options: ['Paul Rudd','Turd Ferguson', 'Crap Bag'],
      answer: 2

     	},

    ]


// console.log(triviaApp.length);


function load(){
	number++;
	questionText.innerHTML=triviaApp[questionIndex].question;
	createOptions();
	scoreBoard();
	
}

function createOptions(){

	optionBox.innerHTML="";

	for(let i = 0; i < triviaApp[questionIndex].options.length; i++){
		const option=document.createElement("div");
		option.innerHTML=triviaApp[questionIndex].options[i];
		option.classList.add("option");
		option.id=i;
		option.setAttribute("onclick", "check(this)");
		optionBox.appendChild(option);
	}

}

function generateRandomQuestion(){
	let randomNumber = Math.floor(Math.random() * triviaApp.length);
	// console.log(randomNumber);
	// console.log(myArray.length);
	let hitDuplicate=0;

	if(myArray.length == 0){
		questionIndex=randomNumber;
	}

	else{

		for(let i=0; i < myArray.length; i++){
			if(randomNumber == myArray[i]){
				// console.log("duplicate random Number:" + randomNumber);
				hitDuplicate=1;
				// console.log("duplicate found:" + randomNumber);
			}

		}

		if(hitDuplicate == 1){
			generateRandomQuestion();
			return;
		}

		else{
			questionIndex=randomNumber;
		}

	}
	
	myArray.push(randomNumber);
	// console.log(myArray);
	load();
}

function check(ele){
	const id=ele.id;
	if(id==triviaApp[questionIndex].answer){
		ele.classList.add("correct");
		score++;
		scoreBoard();
	}	
	else{
		ele.classList.add("wrong");
	}

	// disableOptions()
	// showAnswerDescription();
	showNextQuestionBtn();

	 if(number == triviaApp.length){
      gameOver();
    }
	// stopTimer();
}

// function startTimer(){

// 	let timeLimit=15;
// 	remainingTime.innerHTML=timeLimit;
// 	remainingTime.classList.remove("less-time");
// 	interval = setInterval(() => {
// 		timeLimit--;
// 		if(timeLimit < 10){
// 			timeLimit="0"+timeLimit;
// 		}
// 		if(timeLimit < 6){
// 			remainingTime.classList.add("less-time");
// 		}
// 		remainingTime.innerHTML=timeLimit;
// 		if(timeLimit == 0) {
// 			clearInterval(interval);
// 		}

// 	},1000)

// }

// function stopTimer(){
// 	clearInterval(interval);

// }

// function disableOptions(){
// 	for(let i = 0; i < optionBox.children.length; i++){
// 		optionBox.children[i].classList.add("already-answered");
// 	}
// }

function showNextQuestionBtn(){
	nextQuestionBtn.classList.add("show");
}

function hideNextQuestionBtn(){
	nextQuestionBtn.classList.add("show");
}

function scoreBoard(){

	correctAnswers.innerHTML=score;
}

nextQuestionBtn.addEventListener("click", nextQuestion);

function nextQuestion(){
	questionIndex++;
	generateRandomQuestion();
	hideNextQuestionBtn();
	// startTimer();
}

function gameOver(){
	nextQuestionBtn.classList.remove("show");
	// seeResultBtn.classList.add("show");
}

// seeResultBtn.addEventListener("click",()=>{
// 	// console.log("hi");
// })


window.onload= () => {
	// load();
	generateRandomQuestion();
	// startTimer();

}









// const questionTextTwo = document.querySelector(".Question-Two");

// const optionBoxTwo = document.querySelector(".Option-box-two");

// const nextQuestionBtnTwo = document.querySelector(".next-question-btn-two");

// const correctAnswersTwo = document.querySelector(".correct-answers-two");

// const seeResultBtnTwo = document.querySelector(".see-result-btn-two");

// const remainingTimeTwo = document.querySelector(".remaining-time-two");


// let myArrayTwo = [];

// let questionIndexTwo = 0;

// let scoreTwo = 0;

// let numberSecond = 0;

// // let interval;


// triviaAppTwo = 
// 	[

//   		{

//     questionTwo: 'What is the name of Ross’ first wife?',
//     optionsTwo: ['Carol', 'Emily', 'Susan'],
//     answerTwo: 0

// 		},


// 		 {

//       questionTwo: 'What was the original name of the show?',
//       optionsTwo: ['Monks Cafe','Central Perk', 'Insomnia Cafe'],
//       answerTwo: 2

//      	},

//      	 {

//       questionTwo: 'Who was Rachel supposed to marry in the pilot episode?',
//       optionsTwo: ['Larry','Barry', 'Moe'],
//       answerTwo: 1

//      	},

//      	 {

//       questionTwo: 'What was the name of the woman Ross used to dress up as a child?',
//       optionsTwo: ['Lee','Bee', 'Big Fat Goalie'],
//       answerTwo: 1

//      	},

//      	 {

//       questionTwo: 'How many divorces has Ross had?',
//       optionsTwo: ['Two', "Four" , 'Three'],
//       answerTwo: 2

//      	},
     	
//      	 {

//       questionTwo: 'What was the name of Monica and Ross’ pet dog?',
//       optionsTwo: ['Lacey','Chi-Chi', 'La Pou'],
//       answerTwo: 1

//      	}

//     ]


// // console.log(triviaApp.length);


// function loadTwo(){
// 	numberSecond++;
// 	questionTextTwo.innerHTML=triviaAppTwo[questionIndexTwo].questionTwo;
// 	createOptionsTwo();
// 	scoreBoardTwo();
	
// }

// function createOptionsTwo(){

// 	optionBoxTwo.innerHTML="";

// 	for(let i = 0; i < triviaAppTwo[questionIndexTwo].optionsTwo.length; i++){
// 		const optionTwo=document.createElement("div");
// 		optionTwo.innerHTML=triviaAppTwo[questionIndexTwo].optionsTwo[i];
// 		optionTwo.classList.add("optionTwo");
// 		optionTwo.id=i;
// 		optionTwo.setAttribute("onclick", "check(this)");
// 		optionBoxTwo.appendChild(optionTwo);
// 	}

// }

// function generateRandomQuestionTwo(){
// 	const randomNumberTwo = Math.floor(Math.random() * triviaAppTwo.length);
// 	// console.log(randomNumber);
// 	// console.log(myArrayTwo.length);
// 	let hitDuplicate=0;

// 	if(myArrayTwo.length == 0){
// 		questionIndexTwo=randomNumberTwo;
// 	}

// 	else{

// 		for(let i=0; i < myArrayTwo.length; i++){
// 			if(randomNumberTwo == myArrayTwo[i]){
// 				// console.log("duplicate random Number:" + randomNumber);
// 				// hitDuplicate=1;
// 				// console.log("duplicate found:" + randomNumber);
// 			}

// 		}

// 		if(hitDuplicate == 1){
// 			generateRandomQuestionTwo();
// 			return;
// 		}

// 		else{
// 			questionIndexTwo=randomNumberTwo;
// 		}

// 	}
	
// 	myArrayTwo.push(randomNumberTwo);
// 	// console.log(myArray);
// 	loadTwo();
// }


// function check(ele){
// 	const id=ele.id;
// 	if(id==triviaAppTwo[questionIndexTwo].answerTwo){
// 		ele.classList.add("correct");
// 		scoreTwo++;
// 		scoreBoardTwo();
// 	}	
// 	else{
// 		ele.classList.add("wrong");
// 	}

// 	// disableOptions()
// 	// showAnswerDescription();
// 	showNextQuestionBtnTwo();

// 	 if(numberSecond == triviaAppTwo.length){
//       gameOverTwo();
//     }
	// stopTimer();
// }

// function startTimer(){

// 	let timeLimit=15;
// 	remainingTime.innerHTML=timeLimit;
// 	remainingTime.classList.remove("less-time");
// 	interval = setInterval(() => {
// 		timeLimit--;
// 		if(timeLimit < 10){
// 			timeLimit="0"+timeLimit;
// 		}
// 		if(timeLimit < 6){
// 			remainingTime.classList.add("less-time");
// 		}
// 		remainingTime.innerHTML=timeLimit;
// 		if(timeLimit == 0) {
// 			clearInterval(interval);
// 		}

// 	},1000)

// }

// function stopTimer(){
// 	clearInterval(interval);

// }

// function disableOptions(){
// 	for(let i = 0; i < optionBox.children.length; i++){
// 		optionBox.children[i].classList.add("already-answered");
// 	}
// }

// function showNextQuestionBtnTwo(){
// 	nextQuestionBtnTwo.classList.add("show");
// }

// function hideNextQuestionBtnTwo(){
// 	nextQuestionBtnTwo.classList.add("show");
// }

// function scoreBoardTwo(){

// 	correctAnswersTwo.innerHTML=scoreTwo;
// }

// nextQuestionBtnTwo.addEventListener("click", nextQuestionTwo);

// function nextQuestionTwo(){
// 	// questionIndex++;
// 	generateRandomQuestionTwo();
// 	hideNextQuestionBtnTwo();
// 	// startTimer();
// }

// function gameOverTwo(){
// 	nextQuestionBtnTwo.classList.remove("show");
// 	seeResultBtnTwo.classList.add("show");
// }

// seeResultBtnTwo.addEventListener("click",()=>{
// 	// console.log("hi");
// })


// window.onload= () => {
// 	// load();
// 	// generateRandomQuestion();
// 	generateRandomQuestionTwo();
// 	// startTimer();

// }











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





