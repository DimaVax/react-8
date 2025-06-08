import { useState } from "react";
import { Statistics } from "../Statistics/Statistics";

export const Feedback  = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

    return (
      <>
        <h2>Please leave feedback</h2>
        <ul className="list">
          <li className="item">
            <button className="btn" onClick={() => {setGood(good + 1)}} type="button">
              Good
            </button>
          </li>
          <li className="item">
            <button className="btn" onClick={() => {setNeutral(neutral + 1)}} type="button">
              Medium
            </button>
          </li>
          <li className="item">
            <button className="btn" onClick={() => {setBad(bad + 1)}} type="button">
              Bad
            </button>
          </li>
        </ul>
        <Statistics good={good} neutral={neutral} bad={bad}/>
      </>
    );
}
