import { QUESTIONS } from "../data/questions"

// Calculate max points based on QUESTION array
let maxPoints = 0
QUESTIONS.forEach(() => {
    maxPoints += 20    
})

export default function CurrentQuestion ({questionNumber,userPoints}){
    return <div className="pontuation-box">
                <div className="current-question-number">
                    <span>{questionNumber} of {QUESTIONS.length}</span>
                </div>
                <div className="score">
                    <span>{userPoints}⭐</span>
                    <span className="max-score">{maxPoints}⭐</span>
                </div>
            </div>
}