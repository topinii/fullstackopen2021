import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      <div>
        <button onClick={() => setGood(good + 1)}>
          Good
        </button>
        <br />
        <br />
        <button onClick={() => setNeutral(neutral + 1)}>
          Neutral
        </button>
        <br />
        <br />
        <button onClick={() => setBad(bad + 1)}>
          Bad
        </button>
      </div>
      <div>
        <h1>Statistics</h1>
        <div>
          Good: {good}<br />
          Neutral: {neutral}<br />
          Bad: {bad}<br />
          All: {bad + good + neutral}<br />
          Average: {((good) + (-bad)) / (bad + good + neutral)}<br />
          Positive: {(good / (bad + good + neutral)) * 100}%
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)