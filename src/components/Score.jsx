import { useState } from "react"
import { QUESTIONS } from "../data/questions"
import { convertedDuration } from "./Time"
import { getResultMessage } from "../utils/functions"
import Stats from "./Stats"
import RestartBox from "./RestartBox"
import QuizDetails from "./QuizDetails"

let correctAnswers
let correctAnswersShare
let resultMsg

export default function Score({userAnswers,userPoints,onRestartQuiz}){
    const [showDetails, setShowDetails] = useState(false)
    correctAnswers = userAnswers.filter(answer => answer.isCorrect === true)
    correctAnswersShare = Math.round((correctAnswers.length / QUESTIONS.length) * 100)
    resultMsg = getResultMessage(correctAnswersShare)
    
    function handleShowDetails(){
        setShowDetails(prevShowDetails => !prevShowDetails)
    }

    return <div className="container">
            <RestartBox msg={resultMsg} onRestartQuiz={onRestartQuiz}/>
            <Stats correctAnswersShare={correctAnswersShare} userPoints={userPoints} quizDuration={convertedDuration}/>
            <QuizDetails userAnswers={userAnswers} onShowDetails={handleShowDetails} showDetails={showDetails}/>
        </div>
}