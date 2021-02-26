import React, { useState } from "react";
import ReactDOM from "react-dom";

const Statistics = (props) => {
  console.log("score", props);
  return (
    <div>
      <h1>Statistics</h1>
      {props.all ? (
        <div>
          <table>
            <tbody>
              <StatisticLine text="Good" value={props.good} />
              <StatisticLine text="Neutral" value={props.neutral} />
              <StatisticLine text="Bad" value={props.bad} />
              <StatisticLine text="All" value={props.all} />
              <StatisticLine
                text="Average"
                value={(props.good + -props.bad) / props.all}
              />
              <StatisticLine
                text="Positive"
                value={(props.good / props.all) * 100 + "%"}
              />
            </tbody>
          </table>
        </div>
      ) : (
        <div>No feedback given.</div>
      )}
    </div>
  );
};

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [allVotes, setAll] = useState(0);

  const handleGoodVote = () => {
    setAll(allVotes + 1);
    setGood(good + 1);
  };

  const handleNeutralVote = () => {
    setAll(allVotes + 1);
    setNeutral(neutral + 1);
  };

  const handleBadVote = () => {
    setAll(allVotes + 1);
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>Give feedback</h1>
      <div>
        <Button onClick={handleGoodVote} text="Good" />
        <br />
        <br />
        <Button onClick={handleNeutralVote} text="Neutral" />
        <br />
        <br />
        <Button onClick={handleBadVote} text="Bad" />
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} all={allVotes} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
