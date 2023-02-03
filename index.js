const quizData =[
    {
        question: 'how old I am',
        a: '10',
        b: '23',
        c:'25',
        d: '24 ',
        correct: 'd'
    },{
        question: 'what is my fav food',
        a: 'momo',
        b: 'pizza',
        c:'chicken',
        d: 'kitkat',
        correct: 'd'
    },{
        question: 'when is my birthday',
        a: "june 19",
        b: "april 3",
        c: "june 20",
        d: "may 3",
        correct: 'a'
    },{ 
        question: 'our anniversary date',
        a: "6 July , 2022",
        b: "4 July , 2022",
        c: "22 june, 2022",
        d :"19 august, 2022",
        correct: "a"
    },{
        question: 'fav dress of my',
        a: "kurta",
        b:"saree",
        c:"pant",
        d:"one piece",
        correct: "b"
    },{
    question: 'whom i loved the most',
    a: "Bikram",
    b:"Shambhu",
    c:"sabita",
    d:"sangit",
    correct: "a"
},{
    question: 'what is the my weekness',
    a: "Bikram Bhandari",
    b:"Shambhu",
    c:"sabita",
    d:"sangit",
    correct: "a"
}

];
const answerEls = document.querySelectorAll(".answer");
let Quiz = document.getElementById("quiz");
let currentQuiz = 0;
let score = 0;
//let answer = undefined;
loadQuiz();
function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    document.querySelector(".Question").innerText =currentQuizData.question;
    document.querySelector(".a_text").innerText =currentQuizData.a;
    document.getElementById("btext").innerText = currentQuizData.b;
    document.getElementById("c_text").innerText = currentQuizData.c;
    document.getElementById("d_text").innerText = currentQuizData.d;


    //currentQuiz++;
}
function getSelected(){

 
   let answer = undefined;
    answerEls.forEach((answerEl) => {
   if (answerEl.checked) {
    answer = answerEl.id;
   }
    });
    return answer;
}
function deselectAnswers(){
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
        
        
    });
}
document.getElementById("button").addEventListener("click", () =>{
   // currentQuiz++;
     const answer = getSelected();
     console.log(answer);
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score ++;
        }
        currentQuiz++;
    if(currentQuiz < quizData.length) {
        loadQuiz();
    } else {
    Quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} question.</h2>
    <button onClick="location.reload()">Reload</button>`
    }
    }
});