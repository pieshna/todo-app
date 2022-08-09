import React, { useState } from 'react'
import '../css/TodoForm.css'

function TodoForm({ addTodo }) {

    const [userInput,setUserInput]= useState('')

    const handleOnChange = (e) => {
        setUserInput(e.target.value)
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        if(userInput.trim()!==''){
            addTodo(userInput)
            setUserInput('')
        }
    }

  return (
    <div className='formulario'>
        <form onSubmit={handleOnSubmit}>
            <input type="text" placeholder="Add Todo" value={userInput} onChange={handleOnChange} />
            <button type="submit">Agregar</button>
        </form>
    </div>
  )
}

export default TodoForm;