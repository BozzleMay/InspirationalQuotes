import { useDispatch} from 'react-redux'
import store from './store/index'
import {ActionTypes} from './contstants/action-types'
import { useSelector } from 'react-redux'
import {useEffect, useState} from 'react'
import axios from 'axios'
import ConfettiExplosion from '@reonomy/react-confetti-explosion'
import { addTodo, removeTodo, removeAllTodos } from './actions/todoActions';
import Grid from '@mui/material/Grid';
import './Todos.css'
import { Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';



const selectTodos = state => state.todos

const Todos = () => {
    const [input, setInput] = useState('')
    const [confetti, setConfetti] = useState(false)
    const colors = ["#BA7077", "#819384", "#C18F6C", "#71899C"];
    const todos = useSelector(selectTodos)
    const dispatch = useDispatch()

    todos && Object.keys(todos.todos).map((item, index)=> (
        console.log(todos.todos[item].id)
        ))


const handleChange = (event) => {
  
  setInput(event.target.value)
  
}
const handleSubmit = event => {
  event.preventDefault()
  if (input !== '') {
  
  
  dispatch(addTodo({id: Date.now().toString(), text: input}))
  setInput('')
  }
}
const removerButton = (id) => {
    console.log(id, todos)
    dispatch(removeTodo(id))
    animation()
   
  }
  const removeAllTodosButton = () => {
  dispatch(removeAllTodos())
  }
  
  const animation = () => {
    setConfetti(true)
    
    }
    return (
        <div className='container'>
          
             <div className='surface todo__form'>
      
        <h4 >What do you need to do today?</h4>
        
          <form onSubmit={handleSubmit}>
          <input type='text' name='todo' value={input} autoComplete="off" placeholder='Enter Your Todo' onChange={handleChange} />
          <Button variant="contained" type='submit'>Submit</Button>
          </form>
          </div>
          
          <ul>
            <div className='surface' >
          <Grid container spacing={2}>
          {todos && Object.keys(todos.todos).map((item, index)=> (
             <Grid item xs={3} className='entry' style={{ backgroundColor: colors[index % 4] }}>
               <div>
                 <li key={todos.todos[item].id}>{todos.todos[item].text}</li>
                 <div className='todos__delete'>
                       <IconButton aria-label="delete"   color="primary" onClick={(() => removerButton(todos.todos[item].id))}>
        <DeleteIcon />
      </IconButton>
                
                  </div>
                  {/* {confetti && <ConfettiExplosion 
                    />} */}
                </div>
                  </Grid>
                
                  
              
        ))} 
        </Grid>
        </div>
         </ul>
         
           <Button variant="contained" onClick={(() => removeAllTodosButton())}>Clear Todos</Button>
         
         
          </div>
            

            
        
    )
}

export default Todos
