import reactLogo from '../assets/react.svg'
export default function Header(){
    return <header className='header'>
        <div className='logo-box'>
            <img className='logo' src={reactLogo} alt="React Logo" />
            <span>Atomic Quiz</span>
        </div>
        <div className="quiz-lifes">
            <span>5 ❤️</span> 
        </div>
    </header>
}