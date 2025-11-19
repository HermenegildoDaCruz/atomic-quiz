export default function RestartBox({msg, onRestartQuiz}){
    return  <div className="restart-box">
                <h2 className="restart-msg">{msg}</h2>
                <button className="btn" onClick={onRestartQuiz}>Restart</button>
            </div>
}