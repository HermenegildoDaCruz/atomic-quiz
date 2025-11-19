// Show a message depending of user accurancy share
export function getResultMessage(share){
    let resultMsg
    if(share < 50){
        resultMsg = "Hmm ☹️! Very low score, you can improve."
    }
    if (share >= 50 && share <= 70){
        resultMsg = "Great! let's do better next time."
    }
    if (share > 70 && share <= 99){
        resultMsg = "Excellent, I'm very proud of you, you can achieve 100% next time, right?"
    }
    if (share === 100){
        resultMsg = "Perfect! You nailed it!🤯"
    }
    return resultMsg
    }

// This function converts time from segunds to minutes 
export function convertTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const rest = seconds % 60;
  return `${minutes}:${rest}`;
}
