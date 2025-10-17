import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrease, increase } from '../stors/Store';

function SetCount() {
    const value=useSelector(state => state.count.value);

    const dispatch=useDispatch()


  return (

<>


    <button onClick={()=>{dispatch(increase())}}>+</button>
    <div>{value}</div>
    <button onClick={()=>{dispatch(decrease())}}>-</button>
    </>)
}

export default SetCount