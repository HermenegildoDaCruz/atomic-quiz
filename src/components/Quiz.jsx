import {QUESTIONS} from "../data/questions.js"
import CurrentQuestion from "./CurrentQuestion.jsx"
import { useState } from "react"

export default function Quiz(){
    const [userAnswers, setUserAnswers] = useState([])
    const currentQuestionIndex = userAnswers.length

    // const shuffledQuestion = QUESTIONS[currentQuestionIndex].answers
    // shuffledQuestion.sort(() => Math.random - 0.5)

    return <div className="quiz">
        <CurrentQuestion/>
        <div className="question">
            <h2>{QUESTIONS[currentQuestionIndex].text}</h2>
        </div>
        <ul className="answers">
            {QUESTIONS[currentQuestionIndex].answers.map((answer) => <li key={answer.text} className="answer"><button>{answer.text}</button></li> )}
        </ul>
    </div>
}

// Button disable if next question state was true