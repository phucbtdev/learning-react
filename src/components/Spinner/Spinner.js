import React, { useState } from 'react';
import './style.css';

const Spinner = () => {
    const [on, setOn] = useState(false);

    function handleClick() {
        setOn(!on)
    }

    return (
        <div>
            <div className={`spinner ${on ? 'active' : ''} `} onClick={handleClick}>
                <div className='spinner-circle'></div>
            </div>
        </div>
    );
};

export default Spinner;