import { QUESTIONS } from "../data/questions"
export default function QuizDetails({userAnswers,showDetails,onShowDetails}){
    return <div className="details-box">
                    <header className="details-header">
                        <span>Details</span>
                        <button className="details-btn" onClick={onShowDetails}>{showDetails ? <ion-icon name="chevron-up-outline"></ion-icon>:<ion-icon name="chevron-down-outline"></ion-icon>} </button>
                    </header>
                    {showDetails && <ul className="details">
                        {userAnswers && userAnswers.map((answer,index) => <li>
                            <span>{index + 1}. {QUESTIONS[index].question}</span>
                            <span className={answer.isCorrect ? "green":"red"}>{answer.text}</span>
                        </li> )}
                    </ul>}
                </div>
}