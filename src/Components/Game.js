import React, { useState } from 'react'
import style from 'styled-components'
import Board from './Board'
import { calculatorWinner } from '../helper'
const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)
  const winner = calculatorWinner(board)

  const handleClick = (idx) => {
    const boardCopy = [...board]

    if (winner || board[idx]) return
    boardCopy[idx] = xIsNext ? 'X' : '0'

    setBoard(boardCopy)
    setXIsNext(!xIsNext)
  }

  const restartFunction = () => {
    setBoard(Array(9).fill(null))
  }

  return (
    <WrapperGame>
      <button onClick={restartFunction}>Restart</button>
      <Board board={board} handleClick={handleClick} />

      {winner ? (
        <p style={{ color: 'red' }}>{`${
          xIsNext ? 'WINNER is player 0' : 'WINNER is player X'
        }`}</p>
      ) : (
        <p style={{ color: 'red' }}>{`${
          xIsNext ? 'Next player X' : 'Next player O'
        }`}</p>
      )}
    </WrapperGame>
  )
}

const WrapperGame = style.div`
  min-height: 100vh;
  width: 100%;
  background: #222222;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export default Game
