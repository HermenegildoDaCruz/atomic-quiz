import { QUESTIONS } from "../data/questions"

// Calculate max points based on QUESTION array
let maxPoints = 0
QUESTIONS.forEach(() => {
    maxPoints += 100    
})

export default function CurrentQuestion ({questionNumber,userPoints}){
    return <div className="pontuation-box">
                <div className="current-question-number">
                    <span>{questionNumber} of {QUESTIONS.length}</span>
                </div>
                <div className="score">
                    <span>{userPoints} <strong>xp</strong></span>
                    <span className="max-score">{maxPoints} <strong>xp</strong></span>
                </div>
            </div>
}