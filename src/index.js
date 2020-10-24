import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [voted, setVoted] = useState(new Array(6).fill(0))

  console.log(1111, voted);

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }

  const nextAnecdote = () => {
    setSelected(getRandomIntInclusive(0, 5))
  }

  const voteAnecdote = () => {
    const copy = [...voted]
    copy[selected] += 1
    setVoted(copy)
  }
  const selectEnd = () => {
    if (voted[selected] === 1) {
      return 'vote'
    }
    return 'votes'
  }

  const i = voted.indexOf(Math.max(...voted));

  return (
    <div>
      <h3>Anecdote of the day</h3>
      {props.anecdotes[selected]} <br />
      has {voted[selected]} {selectEnd()}
      <p>
        <button onClick={nextAnecdote}>next anecdote</button>
        <button onClick={voteAnecdote}>vote</button>
      </p>
      <h3>Anecdotes with most votes</h3>
      {props.anecdotes[i]}
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
