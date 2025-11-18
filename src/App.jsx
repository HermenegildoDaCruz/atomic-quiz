import Header from "./components/Header"
import Quiz from "./components/Quiz"
import Time from "./components/Time"
import { useEffect, useState } from "react"
import { QUESTIONS } from "./data/questions"

const DEFAULT_QUIZ_STATE = {
    userAnswers: [],
    userPoints: 0,
    maxErrors: 5, 
    disableAnswers: false,
    duration:0
}

let TIMER
function App() {
  const [quizState, setQuizState] = useState(DEFAULT_QUIZ_STATE)
  const currentQuestionIndex = quizState.userAnswers.length
  const quizFinished = QUESTIONS.length === currentQuestionIndex

  function handleToggleNextState(answer){
      setQuizState((prevQuizState) => {
        let updatedQuizState = {...prevQuizState, userAnswers: [...prevQuizState.userAnswers, answer]}
        
        // If answer is correct user wins 20 points
        if (answer.isCorrect){
          updatedQuizState.userPoints += 100
        } else {
        // else user lose 10 points and 1 life
          if (updatedQuizState.userPoints > 0){
            updatedQuizState.userPoints -= 50
          }
          if (updatedQuizState.maxErrors > 0){
            updatedQuizState.maxErrors -= 1
          }
        }

        return updatedQuizState
      })
  }

  function handleDisableAllAnswers(){
    setQuizState(prevQuizState => {
      const updatedQuizState = {...prevQuizState,disableAnswers: !prevQuizState.disableAnswers}
      return updatedQuizState
    })
  }

  function handleRestartQuiz(){
    setQuizState(DEFAULT_QUIZ_STATE)
  }
  // This effect active all buttons after user choose a answer
  useEffect(()=>{
    if (quizState.disableAnswers){
      setQuizState(prevQuizState => {
        const updatedQuizState = {...prevQuizState, disableAnswers: !prevQuizState.disableAnswers}
        return updatedQuizState
      })
    }
  },[currentQuestionIndex])

  // This effect start a timer to manage duration of quiz
  useEffect(()=>{
      if (!quizFinished){
        TIMER = setTimeout(() => {
      setQuizState(prevQuizState => {
        const updatedQuizState = {...prevQuizState, duration: prevQuizState.duration++}
        return updatedQuizState
      })
    }, 1000);
      }
    return () => {
      clearTimeout(TIMER)
    }    
  },[quizState])

  if (quizState.maxErrors === 0){
       return <div className="restart-box">
              <h2 className="restart-msg">You lost all your lives💔, restart the quiz.</h2>
              <button className="restart-btn" onClick={handleRestartQuiz}>Restart</button>
          </div>
  }

  
  return (
    <>
      <Header ref = {quizState}  remainingLives={quizState.maxErrors}/>
      <Quiz userAnswers={quizState.userAnswers} index={currentQuestionIndex} onNextQuestion={handleToggleNextState} userPoints={quizState.userPoints} disableAnswers = {quizState.disableAnswers} onDisable = {handleDisableAllAnswers} onRestartQuiz = {handleRestartQuiz} quizDuration = {quizState.duration}/>
      {!quizFinished && <Time duration={quizState.duration}/>
}
    </>
  )
}

export default App
