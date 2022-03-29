import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'
import './style.scss'

export const Counter = () => {
 const count = useSelector((state) => state.counter.value)
 const dispatch = useDispatch()

 return (
  <div>
   <h1 className='title'>Title</h1>
   <div>
    <button aria-label='Increment value' onClick={() => dispatch(increment())}>
     Increment
    </button>
    <span>{count}</span>
    <button aria-label='Decrement value' onClick={() => dispatch(decrement())}>
     Decrement
    </button>
   </div>
  </div>
 )
}
