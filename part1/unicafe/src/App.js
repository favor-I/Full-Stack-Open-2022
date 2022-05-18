import { useState } from "react";

const Button = ({funcToCall, text}) =>  <button onClick={funcToCall}>{text}</button>

const StatisticLine = ({text,value}) =>  {
  return(
    <>
      <p>{text}: {value} </p>
    </>
  );
}

const Statistics = ({goodStat,badStat,neutralStat}) => {
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
        <h2>Statistics</h2>
        <StatisticLine text="Good" value={goodStat} />
        <StatisticLine text="Neutral" value={neutralStat} />
        <StatisticLine text="Bad" value={badStat} />
        <StatisticLine text="Total" value={total} />
        <StatisticLine text="Average" value={average} />
        <StatisticLine text="Positive %" value={positive} />
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
        <Statistics goodStat={clicks.good} neutralStat={clicks.neutral} badStat={clicks.bad}/>
      </section>
    </>
  );
}

export default App;
