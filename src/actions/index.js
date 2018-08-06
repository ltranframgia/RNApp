import { ADD_COUNTER } from './actionTypes'

let nextTodoId = 0

export const addCounter = text => ({
    type: ADD_COUNTER,
    id: nextTodoId++,
    text
})
