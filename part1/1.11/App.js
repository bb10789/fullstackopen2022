import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statisitics = (props) => {

  const { good, bad, neutral } = props

  if (good + bad + neutral === 0) {
    return (
      <div>
        < h1 > statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
      < h1 > statistics</h1>
      <table>
        <tbody>
          <tr>
            <td> good</td>
            <td>{good}</td>
          </tr>
          <tr>
            <td> neutral</td>
            <td> {neutral} </td>
          </tr>
          <tr>
            <td> bad </td>
            <td> {bad}</td>
          </tr>
          <tr>
            <td> all </td>
            <td>
              {good + neutral + bad}
            </td>
          </tr>

          <tr>
            <td> average </td>
            <td>
              {(good + bad * -1) / (good + neutral + bad)}
            </td>
          </tr>

          <tr>
            <td> positive </td>
            <td>
              {(good / (good + neutral + bad)) * 100} %
            </td>
          </tr>

        </tbody>
      </table>
    </div>
  )

}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToValue = (setter, newValue) => {
    setter(newValue)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setToValue(setGood, good + 1)} text="good" />
      <Button handleClick={() => setToValue(setNeutral, neutral + 1)} text="neutral" />
      <Button handleClick={() => setToValue(setBad, bad + 1)} text="bad" />
      <Statisitics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App