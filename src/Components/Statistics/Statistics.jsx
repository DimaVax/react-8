

export const Statistics = ({good, neutral, bad}) => {
    return (  
          <>
          {good + neutral + bad > 0 ? (
            <>
            <h2>Statistics</h2>
            <ul>
              <li>Good: {good}</li>
              <li>Neutral: {neutral}</li>
              <li>Bad: {bad}</li>
              <li>
                Total: {good + neutral + bad}
              </li>
              <li>
                Positive feedback:{" "}
                {Math.round(
                  (good /
                    (good + neutral + bad)) *
                    100
                )}
                %
              </li>
            </ul>
            </>
            
          ) : (
            <h2>There is no feedback</h2>
          )}
            
          </>
    );
}
