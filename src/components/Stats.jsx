export default function Stats({correctAnswersShare, userPoints, quizDuration}){
    return <div className="stats">
                <div className="stat">
                    <div><strong>{correctAnswersShare}%</strong> accuracy</div>
                </div>
                <div className="stat">
                    <div><strong>{userPoints}</strong> XP</div>
                </div>
                <div className="stat">
                    <div><strong>{quizDuration}</strong> speed</div>
                </div>
            </div>
}