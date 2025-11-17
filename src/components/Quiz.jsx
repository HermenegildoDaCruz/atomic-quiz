import {QUESTIONS} from "../data/questions.js"
import CurrentQuestion from "./CurrentQuestion.jsx"
import { useEffect } from "react"

let TIMER_ID
export default function Quiz({onNextQuestion,index, userPoints}){
    const quizFinished = QUESTIONS.length === index

    // const shuffledAnswers = QUESTIONS[currentQuestionIndex].answers.sort(() => Math.random() - 0.5);
    // Show if the clicked answer is correct or wrong
    
    function handleIsCorrectFeedback(answer, event){
        const element = event.target
        if (answer.isCorrect){
                element.classList.add("correct")
            }else{
                element.classList.add("wrong")
            } 

        TIMER_ID = setTimeout(() => {
            onNextQuestion(answer)
        }, 700);        
    }

    useEffect(
        () => {
            clearTimeout(TIMER_ID)
        },[index]
    )

    if (quizFinished){
        return <div>fineshed</div>
    }

    return <div className="quiz">
        <CurrentQuestion ref={index} userPoints={userPoints}/>
        <div className="question">
            <h2>{QUESTIONS[index].question}</h2>
        </div>
        <ul className="answers">
            {QUESTIONS[index].answers.map((answer) => <li key={answer.text} className="answer" ><button onClick={(event) => handleIsCorrectFeedback(answer,event)}>{answer.text}</button></li> )}
        </ul>
    </div>
}
