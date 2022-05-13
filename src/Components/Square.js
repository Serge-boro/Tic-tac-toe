import React from 'react'
import style from 'styled-components'
const Square = ({ handleClick, value }) => {
  return <WrapperSquare onClick={handleClick}>{value}</WrapperSquare>
}

const WrapperSquare = style.button`
 width: 100px;
 height: 100px;
 background: #fff;
 border: 1px solid #222222;
 cursor: pointer;
 outline: none;
 font-size: 60px;
 display: flex;
 justify-content: center;
  align-items: center;

  &:active{
     transform: scale(0.7);
  }

 &:hover{
  background: #f0f0f0;
  transition: 1s all ease;
 }

`
export default Square
