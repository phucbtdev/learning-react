import React from 'react';
import './style.css';
const Cell = ({ value, onClickCell }) => {
    return (
        <div
            className='cell'
            onClick={onClickCell}
        >
            {value}
        </div>
    );
};

export default Cell;