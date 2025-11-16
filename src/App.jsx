import Header from "./components/Header"
import Quiz from "./components/Quiz"
import RemainingTime from "./components/RemainingTime"
import { useState } from "react"

function App() {
  const [userAnswers, setUserAnswers] = useState([])
  const currentQuestionIndex = userAnswers.length

  function handleToggleNextState(answer){
      setUserAnswers((prevUserAnswers) => {
        return [...prevUserAnswers, answer]
      })
  }


  return (
    <>
      <Header/>
      <Quiz index={currentQuestionIndex} onNextQuestion={handleToggleNextState}/>
      <RemainingTime onNextQuestion={handleToggleNextState} index={currentQuestionIndex}/>
    </>
  )
}

export default App
