import Header from "./components/Header"
import StartQuiz from "./components/StartQuiz"
import Quiz from "./components/Quiz"
import Time from "./components/Time"
import RestartBox from './components/RestartBox'
import { useEffect, useState } from "react"
import { QUESTIONS } from "./data/questions"

const DEFAULT_QUIZ_STATE = {
    start: false,
    userAnswers: [],
    userPoints: 0,
    maxErrors: 5, 
    disableAnswers: false,
}

function App() {
  const [quizState, setQuizState] = useState(DEFAULT_QUIZ_STATE)
  const currentQuestionIndex = quizState.userAnswers.length
  const quizFinished = QUESTIONS.length === currentQuestionIndex

  // Pass to next question but before check if user answer was correct or wrong and apply some logics according this conditions
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

  // Disable all answers buttons
  function handleDisableAllAnswers(){
    setQuizState(prevQuizState => {
      const updatedQuizState = {...prevQuizState,disableAnswers: !prevQuizState.disableAnswers}
      return updatedQuizState
    })
  }

  // Start quiz
  function handleStartQuiz(){
    setQuizState(prevQuizState => {
      return {...prevQuizState, start: !prevQuizState.start}
    })
  }

  // Reset and restart quiz
  function handleRestartQuiz(){
    setQuizState(()=>{
     return {...DEFAULT_QUIZ_STATE, start: true} 
    })
  }

  // This effect active all buttons after user choose a answer
  useEffect(()=>{
    if (quizState.disableAnswers){
      setQuizState(prevQuizState => {
        return {...prevQuizState, disableAnswers: !prevQuizState.disableAnswers}
      })
    }
  },[currentQuestionIndex])
   

  if (!quizState.start){
    return <StartQuiz onStartQuiz={handleStartQuiz}/>
  }

  if (quizState.maxErrors === 0){
      return <RestartBox msg={"You lost all your lives💔, restart the quiz."} onRestartQuiz={handleRestartQuiz}/>
  }

  return (
    <>
      <Header ref = {quizState}  remainingLives={quizState.maxErrors}/>
      <Quiz userAnswers={quizState.userAnswers} index={currentQuestionIndex} onNextQuestion={handleToggleNextState} userPoints={quizState.userPoints} disableAnswers = {quizState.disableAnswers} onDisable = {handleDisableAllAnswers} onRestartQuiz = {handleRestartQuiz}/>
      {!quizFinished && <Time quizFinished={quizFinished}/>
}
    </>
  )
}

export default App
