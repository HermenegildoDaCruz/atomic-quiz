import reactLogo from '../assets/react.svg'
export default function StartQuiz({onStartQuiz}){
    return <>
            <div className="start-box">
                  <img className='logo' src={reactLogo} alt="React Logo" />
                  <h2>Hi!! Welcome to <span className="app-name">Atomic Quiz App</span>, test your react knowledge</h2>
                  <button className="btn" onClick={onStartQuiz}>Start</button>
            </div>
            <aside className='app-creater'>Created by Hermenegildo da Cruz</aside>
        </> 
}