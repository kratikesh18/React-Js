import {createSlice,nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos:[{id:2 , task:"EatPussy"}]
}

export const TodoSlice = createSlice({
    name :"todo",
    initialState,

    reducers:{
        addTodo:(state, action)=>{
            const todo ={
                id:nanoid(),
                task:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state, action)=>{
            state.todos = state.todos.filter((todo) =>( 
                todo.id !== action.payload
            ))
        }
    }
})


export const {addTodo, removeTodo} = TodoSlice.actions
export default TodoSlice.reducer 