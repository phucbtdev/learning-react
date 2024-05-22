import { useState } from 'react';
import Board from './Board';
import calculateWinner from '../../helpers/calculate';

export default function Game() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true)
  const winner = calculateWinner(board);

  const handleClick = (index) => {
    //Copy new array
    const copyBoard = [...board];

    //Check
    if (winner || copyBoard[index]) {
      return;
    }
    // [x, null, null],
    // [null, null, null],
    // [null, null, null]

    //If current value is X  => O
    copyBoard[index] = xIsNext ? 'X' : 'O';
    setXIsNext(!xIsNext); //Gán xong  sau đó set lại giá trị

    //Gán mảng củ thành mảng mới
    setBoard(copyBoard);
  }

  //Reset
  const resetBoard = () => {
    setBoard(Array(9).fill(null))
  }

  return (
    <div className='game'>
      <Board cells={board} onClick={handleClick} ></Board>
      <button onClick={resetBoard}>Reset</button>
    </div>
  );
}
