import {ActionTypes} from '../contstants/action-types'

export const addTodo = (todo) => {
    return { type: ActionTypes.ADD_TODO,
        payload: todo }
}
export const removeTodo = (id) => {
  return { type: ActionTypes.REMOVE_TODO,
      payload: id 
      }
      
}

export const removeAllTodos = () => {
    return { type:  ActionTypes.REMOVE_ALL_TODOS}
  }