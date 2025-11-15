export default function RemainingTime({showNextStepBtn,}){
    return <div className="remaining-time-box">
            <div className="remaining-time">
                <span>30s</span>
            </div>
            {showNextStepBtn && <button className="next-btn">Next</button>}
        </div>
}