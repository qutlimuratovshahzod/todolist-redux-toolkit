import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteTodo,  getTodos,  toggleTodo } from '../redux/todosSlice'
export const Todolist = () => {
   const {todos} = useSelector(state => state) 
   const dispatch = useDispatch()
    return (

        <ul style={{margin: "auto", width: 500 }}>
         
            {todos.map((todo, index) => {
                return (
                    <li style={{display: "flex", justifyContent: "space-between"}} key={todo.id}>
                        {todo.title}
                        <span>
                            <button className='btn btn-outline btn-ghost' onClick={() => dispatch(toggleTodo(todo.id))}>check</button>
                            <button className='btn btn-outline btn-ghost' onClick={()=> dispatch(deleteTodo(todo.id))}>delete</button>
                        </span>
                    </li>
                )
            })}</ul>
    )
}
