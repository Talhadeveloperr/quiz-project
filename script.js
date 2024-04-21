const quizData=[
    {
        question:"What is the capital of France?",
        options:[
            " Berlin",
            " London",
            " Paris",
            " Madrid",
        ],
        correct:2,
    },
    {
        question:"Which planet is known as the Red Planet?",
        options:[
            "Venus",
             "Mars",
             "Jupiter",
             "Saturn",
        ],
        correct:1,
    },
   {
    question:"Who wrote the play Romeo and Juliet?",
    options:[
        "William Wordsworth",
        " William Shakespeare",
        " Jane Austen",
        " Charles Dickens",
    ],
    correct:1,
   },
];
const quiz =document.querySelector("#quiz");
const answerElm =document.querySelectorAll(".answer");
const [questionElm,option_1,option_2,option_3,option_4]=
document.querySelectorAll("#question, .option_1, .option_2,.option_3,.option_4");
const submitbtn=document.querySelector("#submit");
let currentQuiz =0;
let score=0;

const loadquiz=() =>{
    const { question,options}=quizData[currentQuiz];
    console.log(question);
    
  questionElm.innerText=`${currentQuiz +1}:${question}`;
  options.forEach((curOption,index)=>(window[`option_${index +1}`].innerText=curOption));
    };
loadquiz();

const getSelectedOption=()=>{
    //let ans_index;
    // answerElm.forEach((curOption,index)=>{
    //     if (curOption.checked){
    //         ans_index=index;
    //     }
    // });
    // return ans_index;
    let answerElement=Array.from(answerElm);
    return answerElement.findIndex((curElem)=> curElem.checked);


};
const deselectedAnswers=()=>{
   return answerElm.forEach((curElem)=>curElem.checked=false);
};
submitbtn.addEventListener("click",()=>{
    const selectedOptionIndex =getSelectedOption();
    console.log(selectedOptionIndex);
    if(selectedOptionIndex===quizData[currentQuiz].correct){
        score+=1;
    }
    currentQuiz++;
    if(currentQuiz<quizData.length){
        deselectedAnswers();
        loadquiz();
    }
    else{
        quiz.innerHTML=`
        <div class="result">
        <h2> 🏵 Your score: ${score}/${quizData.length} Correct Answers</h2>
        <p>congratulations</p>
        <button class ="reload-button" onclick="location.reload()">Play Again<button></div>`;
    }
    
});
