import React, { useState } from "react";
import ReactDOM from "react-dom";

const Statistics = (props) => {
  console.log('score', props)
  return (
  <div>
    <h1>Statistics</h1>
    {(props.good + props.neutral + props.bad) ?
    <div>
      Good: {props.good}
      <br />
      Neutral: {props.neutral}
      <br />
      Bad: {props.bad}
      <br />
      All: {props.bad + props.good + props.neutral}
      <br />
      Average: {(props.good + -props.bad) / (props.bad + props.good + props.neutral)}
      <br />
      Positive: {(props.good / (props.bad + props.good + props.neutral)) * 100}%
    </div> :
    <div>
      No feedback given.
    </div>
    }
  </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      <div>
        <button onClick={() => setGood(good + 1)}>Good</button>
        <br />
        <br />
        <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
        <br />
        <br />
        <button onClick={() => setBad(bad + 1)}>Bad</button>
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />

    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
