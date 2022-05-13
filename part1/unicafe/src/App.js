import { useState } from "react";

const Button = ({funcToCall, text}) =>  <button onClick={funcToCall}>{text}</button>

const Statistics = ({title,goodStat,badStat,neutralStat}) => {
  const total = (goodStat + neutralStat + badStat);
  const average = ((goodStat *1) + (badStat * -1))/total;
  const positive = (goodStat * (100/total));

  if(total === 0) {
    return (
      <p>No feedback given</p>
    );
  } else {
    return (
      <>
        <h2>{title}</h2>
        <p>Good: {goodStat}</p>
        <p>Neutral: {neutralStat}</p>
        <p>Bad: {badStat}</p>
        <p>Total: {total}</p>
        <p>Average: {average}</p>
        <p>Positive: {positive}</p>
      </>
    );
  }
}

function App() {
  const [clicks, setClicks] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })

  return (
    <>
      <section>
        <h2>Give Feedback</h2>
        <Button funcToCall={ () => setClicks({...clicks, good: clicks.good + 1})} text = "Good" />
        <Button funcToCall={() => setClicks({...clicks, neutral: clicks.neutral + 1})} text = "Neutral" />
        <Button funcToCall={() => setClicks({...clicks, bad: clicks.bad + 1})} text = "Bad" />
        <Statistics title="Statistics" goodStat={clicks.good} neutralStat={clicks.neutral} badStat={clicks.bad}/>

      </section>
    </>
  );
}

export default App;
