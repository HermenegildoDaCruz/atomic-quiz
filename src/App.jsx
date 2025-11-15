import Header from "./components/Header"
import Quiz from "./components/Quiz"
import RemainingTime from "./components/RemainingTime"
import { useState } from "react"
function App() {
  const [nextState, setNextState] = useState(false)

  return (
    <>
      <Header/>
      <Quiz/>
      <RemainingTime showNextStepBtn={nextState}/>
    </>
  )
}

export default App
