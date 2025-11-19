import {QUESTIONS} from "../data/questions.js"
import CurrentQuestion from "./CurrentQuestion.jsx"
import Score from "./Score.jsx"
import { useEffect } from "react"

let TIMER_ID
let shuffledAnswers
export default function Quiz({userAnswers,onNextQuestion,index, userPoints,disableAnswers,onDisable,onRestartQuiz}){
    const quizFinished = QUESTIONS.length === index

    // Shuffle answers only if quiz not completed
    if (!quizFinished){
        shuffledAnswers = QUESTIONS[index].answers
    }
    // Show if the clicked answer is correct or wrong
    
    function handleIsCorrectFeedback(answer, event){
        const element = event.target
        onDisable() //This function disable all answers btns
        // Apply style conditionally according user answer 
        if (answer.isCorrect){
                element.classList.add("correct")
        }else{
            element.classList.add("wrong")
        } 
        // After 600ms jump to the next question
        TIMER_ID = setTimeout(() => {
            onNextQuestion(answer)
        }, 600);        
    }

    // Shuffle answers after choosing an answer (when index of question changes)
    useEffect(
        () => {
            if (index > 0 && index < QUESTIONS.length){
                shuffledAnswers.sort(() => Math.random() - 0.5); // Shuffle next question --answers-- when index changes 
            }
            clearTimeout(TIMER_ID)
        },[index]
    )

    // Show the final score when all quizzes is completed
    if (quizFinished){
        return <Score userAnswers={userAnswers} userPoints={userPoints} onRestartQuiz = {onRestartQuiz}/>
    }

    return <div className="container">
        <CurrentQuestion ref={index} questionNumber = {index + 1} userPoints={userPoints}/>
        <div className="question">
            <h2>{QUESTIONS[index].question}</h2>
        </div>
        <ul className="answers">
            {shuffledAnswers.map((answer) => <li key={answer.text} className="answer" ><button onClick={(event) => handleIsCorrectFeedback(answer,event)} disabled={disableAnswers}>{answer.text}</button></li> )}
        </ul>
    </div>
}
