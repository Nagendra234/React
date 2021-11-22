import React, { useReducer } from 'react'

const UseRed = () => {
    const reducer = (state, actions) => {
        console.log('Hello')
        switch (actions.type) {
            case 'Increment':
                return { count: state.count + 1 }
            default:
                return null
        }
    }
    const [state, dispatch] = useReducer(reducer, { count: 1, text: true })

    return (
      <div>
        <h1>Reducer</h1>
        <h2>{state.count}</h2>
        <button onClick={() => { dispatch({ type: 'Increment' }) }} type="button">Inc</button>
      </div>
    )
}

export default UseRed
