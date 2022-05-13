import { useState } from "react";

const Button = ({funcToCall, text}) =>  <button onClick={funcToCall}>{text}</button>

const Statistics = () => 
{}

function App() {
  const [clicks, setClicks] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })

  // const handleGoodClicks = () => {
  //   setClicks({...clicks, good: clicks.good + 1})
  // }
  // const handleNeutralClicks = () => {
  //   setClicks({...clicks, neutral: clicks.neutral + 1})
  // }
  // const handleBadClicks = () => {
  //   setClicks({...clicks, bad: clicks.bad + 1})
  // }

  return (
    <>
      <section>
        <h2>Give Feedback</h2>
        <Button funcToCall={ () => setClicks({...clicks, good: clicks.good + 1})} text = "Good" />
        <Button funcToCall={() => setClicks({...clicks, neutral: clicks.neutral + 1})} text = "Neutral" />
        <Button funcToCall={() => setClicks({...clicks, bad: clicks.bad + 1})} text = "Bad" />
        <h2>Statistics</h2>
        <p>Good: {clicks.good}</p>
        <p>Neutral: {clicks.neutral}</p>
        <p>Bad: {clicks.bad}</p>
        <p>Total: {clicks.bad + clicks.good +clicks.neutral}</p>
        <p>Average: {((clicks.good *1) + (clicks.bad * -1))/(clicks.bad + clicks.good +clicks.neutral)}</p>
        <p>Positive: {clicks.good * (100/(clicks.bad + clicks.good +clicks.neutral))}</p>
      </section>
    </>
  );
}

export default App;
