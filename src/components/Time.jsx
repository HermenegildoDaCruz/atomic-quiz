import { useEffect, useState } from "react";

// This function converts time in segunds to minutes
export function convertTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const rest = seconds % 60;
  return `${minutes}:${rest}`;
}

let timer
export let convertedDuration
export default function Time({quizFinished}){
    const [duration, setDuration] = useState(1)

    useEffect(
        () => {
        if (!quizFinished){
            timer = setTimeout(() => {
            setDuration(prevDuration => prevDuration + 1)
        }, 1000)}
        else{
        clearInterval(timer)
    }
        }    
    ,[duration])

    if (duration >= 60){
        convertedDuration = convertTime(duration)
    }else{
        convertedDuration = duration + "s "
    }
    

    return <div className="container">
            <div className="duration">
                <span>{convertedDuration}</span>
            </div>
        </div>
}