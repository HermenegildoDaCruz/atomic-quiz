// This function converts time in segunds to minutes
export function convertTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const rest = seconds % 60;
  return `${minutes}:${rest}`;
}

export default function Time({duration}){
    if (duration >= 60){
        duration = convertTime(duration)
    }else{
        duration += "s"
    }

    return <div className="container">
            <div className="duration">
                <span>{duration}</span>
            </div>
        </div>
}