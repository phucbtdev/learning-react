import React from 'react';
import Cell from './Cell';
import './style.css';

const Board = (props) => {
    console.log(props.onClick);
    return (
        <div className='game-board'>
            {props.cells.map((value, index) => (
                <Cell
                    key={index}
                    value={value}
                    onClickCell={() => props.onClick(index)}
                ></Cell>
            ))}
        </div>
    );
};

export default Board;