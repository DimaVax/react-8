import { Component } from "react";
import { Statistics } from "../Statistics/Statistics";

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  goodOption = () => {
    // console.log(this.state.good)
    this.setState((prevState) => ({
      good: prevState.good + 1,
    }))
  }
  neutralOption = () => {
    // console.log(this.state.good)
    this.setState((prevState) => ({
      neutral: prevState.neutral + 1,
    }))
  }
  badOption = () => {
    // console.log(this.state.good)
    this.setState((prevState) => ({
      bad: prevState.bad + 1,
    }))
  }
  render() {
    // console.log(this.state.good)
    return (
      <>
        <h2>Please leave feedback</h2>
        <ul className="list">
          <li className="item">
            <button className="btn" onClick={this.goodOption} type="button">
              Good
            </button>
          </li>
          <li className="item">
            <button className="btn" onClick={this.neutralOption} type="button">
              Medium
            </button>
          </li>
          <li className="item">
            <button className="btn" onClick={this.badOption} type="button">
              Bad
            </button>
          </li>
        </ul>
        <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad}/>
      </>
    );
  }
}
