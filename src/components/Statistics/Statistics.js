import Notification from "components/Notification/Nitification"


export default function Statistics({good, neutral, bad, totalCounter, totalPercentage}){
   const totalFeedback = totalCounter();
   const positivePercent = totalPercentage();

    return(
        <div>
            {totalFeedback ?
            (<ul>
            <li>Good: <span>{good}</span></li>
            <li>Neutral: <span>{neutral}</span></li>
            <li>Bad: <span>{bad}</span></li>
            <li>Total: <span>{totalFeedback}</span></li>
            <li>Positive Feedback: <span>{positivePercent}%</span></li>
            </ul>) : <Notification message = {'No feedback given'}/>}
        </div>
    )
}