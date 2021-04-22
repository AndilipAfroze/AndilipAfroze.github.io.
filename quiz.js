const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const quizQuestions = [
    {
        question: "Andilip Afroze is currently: ",
        answers: {
            a: " a phd student ",
            b: " doing masters by research ",
            c: " an Mphil student ",
            d: " professional doctorate "
        },
        correctAnswer: "a"
    },

    {
        question: "Her research area is: ",
        answers: {
            a: " labour economics ",
            b: " developing economics ",
            c: " behavioural economics ",
            d: " All of the above "
        },
        correctAnswer: "d"
    },

    {
        question: "Which award is relevant to her: ",
        answers: {
            a: " Indigenous Commonwealth Scholarship ",
            b: " Equity scholarships scheme ",
            c: " QUT Postgraduate Research Award (QUTPRA) ",
            d: " None "
        },
        correctAnswer: "c"
    },

    {
        question: " Which softwere skill is relevant to her ",
        answers: {
            a: " STATA ",
            b: " R ",
            c: " CSpro ",
            d: " a and c "
        },
        correctAnswer: "d"
    }

];

function buildQuiz(){

    // variable to store the HTML output
    const output = [];

    for(i=0; i<quizQuestions.length; i++){

        // store list of answer choices
        const answers = [];

        // for each available answer to this question add an HTML radio button
        for(letter in quizQuestions[i].answers){
            answers.push(
                '<label>'
                + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                + letter + ': '
                + quizQuestions[i].answers[letter]
                + '</label>'             

            );

        }
        // add this question and its answers to the output
        output.push(
            '<div class="question">' + quizQuestions[i].question + '</div>'                  
            + '<div class="answers">' + answers.join('') + '</div>'
                    );

    }
    // combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');

}

function showResults(){
    //gather answer containers from our quiz
    var answerContainers = quizContainer.querySelectorAll('.answers');
    //keep track of users answers
    var numCorrect = 0;

    //for each question
    for(i=0; i<quizQuestions.length; i++){

        //find selected answer
        userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

        //if answer is correct
        if(userAnswer===quizQuestions[i].correctAnswer){
            //add to the number of correct answers
            numCorrect++;

            //color the answer green
            answerContainers[i].style.color = 'lightgreen';
        } 
        
        else{
            //color the answers red
            answerContainers[i].style.color = 'red' ;
        }
    }

    if (numCorrect === 0) {

        resultsContainer.innerHTML= "That wasn't your best effort. No answer was correct.";

    }

    if (numCorrect === 1) {

        resultsContainer.innerHTML= "You've got one answer correct";

    }

    if (numCorrect === 2) {
        resultsContainer.innerHTML= "That was okay! You've got a score of 2 out of 4 of your responses. ";

    }

    if (numCorrect === 3) {

        resultsContainer.innerHTML= "Congratulations! You got a good score of 3 out of 4 for your responses. You know Andilip pretty well!";

    }

    if (numCorrect === 4) {

        resultsContainer.innerHTML= "Congratulations! You got a perfect score of 4 out of 4 for your responses. You know Andilip so well!";

    }    
    
}


//load quiz
buildQuiz();

submitButton.onclick = function(){
    showResults();
}