import { useState } from "react"
import { QUESTIONS } from "../data/questions"
import { convertTime } from "./Time"

function getResultMessage(share){
    if(share < 50){
        resultMsg = "Hmm ☹️! Very low score, you can improve."
    }
    if (share >= 50 && share <= 70){
        resultMsg = "Great! let's do better next time."
    }
    if (share > 70 && share <= 99){
        resultMsg = "Excellent, I'm very proud of you, you can achieve 100% next time, right?"
    }
    if (share === 100){
        resultMsg = "Perfect! You nailed it!🤯"
    }
    return resultMsg
    }
    
let correctAnswers
let correctAnswersShare
let resultMsg

export default function Score({userAnswers,userPoints, quizDuration,onRestartQuiz}){
    const [showDetails, setShowDetails] = useState(false)
    correctAnswers = userAnswers.filter(answer => answer.isCorrect === true)
    correctAnswersShare = Math.round((correctAnswers.length / QUESTIONS.length) * 100)
    resultMsg = getResultMessage(correctAnswersShare)
    
    if (quizDuration >= 60){
        quizDuration = convertTime(quizDuration)
    }else{
        quizDuration += "s"
    }

    function handleShowDetails(){
        setShowDetails(prevShowDetails => !prevShowDetails)
    }

    return <div className="container">
            <div className="restart-box">
                <h2 className="restart-msg">{resultMsg}</h2>
                <button className="restart-btn" onClick={onRestartQuiz}>Restart</button>
            </div>
            <div className="stats">
                <div className="stat">
                    <div><strong>{correctAnswersShare}%</strong> accuracy</div>
                </div>
                <div className="stat">
                    <div><strong>{userPoints}</strong> XP</div>
                </div>
                <div className="stat">
                    <div><strong>{quizDuration}</strong> speed</div>
                </div>
            </div>
            <div className="details-box">
                <header className="details-header">
                    <span>Details</span>
                    <button className="details-btn" onClick={handleShowDetails}>{showDetails ? <ion-icon name="chevron-up-outline"></ion-icon>:<ion-icon name="chevron-down-outline"></ion-icon>} </button>
                </header>
                {showDetails && <ul className="details">
                    {userAnswers && userAnswers.map((answer,index) => <li>
                        <span>{index + 1}. {QUESTIONS[index].question}</span>
                        <span className={answer.isCorrect ? "green":"red"}>{answer.text}</span>
                    </li> )}
                </ul>}
                
            </div>
        </div>
}