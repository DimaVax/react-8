import { Component } from "react";

export class Statistics extends Component {
  render() {
    return (  
          <>
            <h2>Statistics</h2>
            <ul>
              <li>Good: {this.props.good}</li>
              <li>Neutral: {this.props.neutral}</li>
              <li>Bad: {this.props.bad}</li>
              <li>
                Total: {this.props.good + this.props.neutral + this.props.bad}
              </li>
              <li>
                Positive feedback:{" "}
                {Math.round(
                  (this.props.good /
                    (this.props.good + this.props.neutral + this.props.bad)) *
                    100
                )}
                %
              </li>
            </ul>
          </>
    );
  }
}
