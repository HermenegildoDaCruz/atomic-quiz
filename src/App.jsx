import Header from "./components/Header"
import Quiz from "./components/Quiz"
import RemainingTime from "./components/RemainingTime"
import { useEffect, useState } from "react"

const DEFAULT_ANSWER_STATE = {
    userAnswers: [],
    userPoints: 0,
    maxErrors: 5, 
    disableAnswers: false,
}

function App() {
  const [answersState, setAnswersState] = useState(DEFAULT_ANSWER_STATE)
  const currentQuestionIndex = answersState.userAnswers.length

  function handleToggleNextState(answer){
      setAnswersState((prevAnswersState) => {
        let updatedAnswersState = {...prevAnswersState, userAnswers: [...prevAnswersState.userAnswers, answer]}
        
        // If answer is correct user wins 20 points
        if (answer.isCorrect){
          updatedAnswersState.userPoints += 100
        } else {
        // else user lose 10 points and 1 life
          if (updatedAnswersState.userPoints > 0){
            updatedAnswersState.userPoints -= 50
          }
          if (updatedAnswersState.maxErrors > 0){
            updatedAnswersState.maxErrors -= 1
          }
        }

        return updatedAnswersState
      })
  }

  function handleDisableAllAnswers(){
    setAnswersState(prevAnswersState => {
      const updatedAnswersState = {...prevAnswersState,disableAnswers: !prevAnswersState.disableAnswers}
      return updatedAnswersState
    })
  }

  function handleRestartQuiz(){
    setAnswersState(DEFAULT_ANSWER_STATE)
  }

  useEffect(()=>{
    if (answersState.disableAnswers){
      setAnswersState(prevAnswersState => {
        const updatedAnswersState = {...prevAnswersState, disableAnswers: !prevAnswersState.disableAnswers}
        return updatedAnswersState
      })
    }
  },[currentQuestionIndex])

  if (answersState.maxErrors === 0){
       return <div className="restart-box">
              <h2 className="restart-msg">You lost all your lives💔, restart the quiz.</h2>
              <button className="restart-btn" onClick={handleRestartQuiz}>Restart</button>
          </div>
    }
  

  return (
    <>
      <Header ref = {answersState}  remainingLives={answersState.maxErrors}/>
      <Quiz userAnswers={answersState.userAnswers} index={currentQuestionIndex} onNextQuestion={handleToggleNextState} userPoints={answersState.userPoints} disableAnswers = {answersState.disableAnswers} onDisable = {handleDisableAllAnswers} onRestartQuiz = {handleRestartQuiz}/>
      <RemainingTime onNextQuestion={handleToggleNextState} index={currentQuestionIndex}/>
    </>
  )
}

export default App
