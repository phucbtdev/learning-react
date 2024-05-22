import React, { useReducer } from 'react';

const Reducer = () => {
    const [state, dispatch] = useReducer(reducer, { name: 'Taylor', age: 28 });
    function reducer(state, action) {
        switch (action.type) {
            case 'increase':
                return {
                    name: state.name,
                    age: state.age + 1
                }
            case 'change_name':
                return {
                    name: action.newName,
                    age: state.age
                }

            default:
                break;
        }
    }

    function handleInputChange(e) {
        dispatch({ type: "change_name", newName: e.target.value })
    }

    function handleInputClick() {
        dispatch({ type: "increase" })
    }

    return (
        <div>
            <button onClick={handleInputClick}>Increase age</button>

            <input value={state.name} onChange={handleInputChange} />


            <div>{state.name}</div>
            <div>{state.age}</div>
        </div>
    );
};

export default Reducer;