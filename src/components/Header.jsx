import reactLogo from '../assets/react.svg'
export default function Header({remainingLives}){
    return <header className='header'>
        <div className='logo-box'>
            <img className='logo' src={reactLogo} alt="React Logo" />
            <span>Atomic Quiz</span>
        </div>
        <div className="quiz-lifes">
            <span>{remainingLives}❤️</span> 
        </div>
    </header>
}