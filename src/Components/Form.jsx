import React, { useState } from 'react'
import {useDispatch} from  "react-redux"
import { createTodo, getTodos } from '../redux/todosSlice'
export const Form = () => {

    const dispatch = useDispatch()
    const [value, setValue] = useState("")
    const submitHandler = (event ) => {
        event.preventDefault();
        if(!value.trim()) return;

      const todo = {
        id: Date.now(),
        title: value,
        completed: false,
      }

      dispatch(createTodo(todo))
    }
  return (
    <form onSubmit={submitHandler} style={{width: 500, margin: "20px auto" }}>
        <input className='input input-bordered w-full max-w-xs' style={{width: "100%"}} value={value} onChange={(event) => setValue(event.target.value)} placeholder='todo text here...' type="text" />     <button className='btn btn-outline btn-ghost'>add</button> 
        <button className='btn btn-outline btn-ghost' onClick={() => dispatch(getTodos())}>Backend</button>
    </form>
  )
}
