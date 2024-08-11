import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: JSON.parse(localStorage.getItem('todos')) || []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
                status: false
            }
            state.todos.push(todo)
            localStorage.setItem('todos', JSON.stringify(state.todos))
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
            localStorage.setItem('todos', JSON.stringify(state.todos))
        },
        editTodo: (state, action) => {
            const {id, text} = action.payload
            const todo = state.todos.find(todo => todo.id === id)
            if(todo){
                todo.text = text
                localStorage.setItem('todos', JSON.stringify(state.todos))
                console.log(todo)
            }
        },
        toggleStatus: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload.id);
            if(todo){
                todo.status = !todo.status
                localStorage.setItem('todos', JSON.stringify(state.todos))
            }
        }
    }
})

export const { addTodo, deleteTodo, editTodo, toggleStatus } = todoSlice.actions
export default todoSlice.reducer