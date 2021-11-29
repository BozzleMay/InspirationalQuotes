import { ActionTypes } from "./contstants/action-types"

export const initialState = {
    todos: [{
        id: 1,
        text: 'wash Shoes'
    }],
   
    }

    const taskReducer = (state = initialState, {type, payload}) => {
        switch(type){
            case ActionTypes.ADD_TODO: 
            return{...state, todos: [...state.todos, payload]}
            case ActionTypes.REMOVE_TODO:
              return   {...state, todos: state.todos.filter(todo => todo.id !== payload)}
                 
         
            case  ActionTypes.REMOVE_ALL_TODOS:
                return {todos: []}
 
            default:
            return state
        }
    }
    
    
    export default taskReducer