import React from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/todo/TodoSlice'
import { useState } from 'react'

function AddTodo() {
    const [input, setInput] = useState('')
    const dispatch = useDispatch();

    const handleOnclick = (e)=>{
        e.preventDefault();
        dispatch(addTodo(input))
        setInput('')
    }
  return (
    <form >
        <input type="text" onChange={(e) => setInput(e.target.value)} />
        <button type='submit' onClick={handleOnclick}>Add todo</button>
    </form>
  )
}

export default AddTodo