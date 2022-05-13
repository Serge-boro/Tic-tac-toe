import React, { useState } from 'react'
import style from 'styled-components'
import Square from './Square'

const Board = ({ board, handleClick }) => {
  return (
    <WrapperBoard>
      {board.map((item, idx) => {
        return (
          <Square key={idx} value={item} handleClick={() => handleClick(idx)} />
        )
      })}
    </WrapperBoard>
  )
}

const WrapperBoard = style.div`
 width: 300px;
 height: 300px;
 background: red;
  display: flex;
 flex-wrap: wrap;

`
export default Board
