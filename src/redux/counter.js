import React from 'react';
import './style.css'

import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment  , incrementByAmount , reset} from './counterSlice'
const Counter = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div className='card counter-card d-flex w-100 flex-column justify-centent-center align-items-center'>
      <span>{count}</span> <br />
        <button className='btn btn-success'
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        
        <button className='btn btn-danger'
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button className='btn btn-warning'
          aria-label="Decrement value"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          increment by 5
        </button>
        <button  className='btn btn-dark'
          aria-label="Decrement value"
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default Counter;
