import Header from "./components/Header"
import Quiz from "./components/Quiz"
import RemainingTime from "./components/RemainingTime"
import { useEffect, useState } from "react"

function App() {
  const [answersState, setAnswersState] = useState({
    userAnswers: [],
    userPoints: 0,
    maxErrors: 5, 
    disableAnswers: false,
  })
  const currentQuestionIndex = answersState.userAnswers.length

  function handleToggleNextState(answer){
      setAnswersState((prevAnswersState) => {
        let updatedAnswersState = {...prevAnswersState, userAnswers: [...prevAnswersState.userAnswers, answer]}
        
        // If answer is correct user wins 20 points
        if (answer.isCorrect){
          updatedAnswersState.userPoints += 20
        } else {
        // else user lose 10 points and 1 life
          updatedAnswersState.userPoints -= 10
          updatedAnswersState.maxErrors -= 1
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

  useEffect(()=>{
    if (answersState.disableAnswers){
      setAnswersState(prevAnswersState => {
        const updatedAnswersState = {...prevAnswersState, disableAnswers: !prevAnswersState.disableAnswers}
        return updatedAnswersState
      })
    }
  },[currentQuestionIndex])


  return (
    <>
      <Header ref = {answersState} remainingLives={answersState.maxErrors}/>
      <Quiz index={currentQuestionIndex} onNextQuestion={handleToggleNextState} userPoints={answersState.userPoints} disableAnswers = {answersState.disableAnswers} onDisable = {handleDisableAllAnswers}/>
      <RemainingTime onNextQuestion={handleToggleNextState} index={currentQuestionIndex}/>
    </>
  )
}

export default App
