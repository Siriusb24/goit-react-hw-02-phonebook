

export default function FeedbackOptions({options, onLeaveFeedback}){

//console.log(Object.keys(options))
return(
<ul>
    {Object.keys(options).map(button => {return(<li key={button}><button type="button" onClick={onLeaveFeedback}>{button}</button></li>)})}
</ul>
);
};

