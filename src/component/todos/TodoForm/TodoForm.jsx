import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import todoActions from '../../../redux/todos/todos-action';
import s from './todoForm.module.css'




export default function TodoForm({toggleForm}) {
    const dispatch = useDispatch()
    const [text, setText] = useState('')

    const updateText = e => {
        setText(e.target.value)
        
    }


    const hundleSubmit = e => {
        e.preventDefault();
        if (text === '') {
            return 
        }
        console.log('submit')
dispatch(todoActions.addTaskSuccess(text))
        setText('');
        toggleForm()
    }

    return (
        <form onSubmit={hundleSubmit} className={s.formContainer}>
            <input type="text" value={text} onChange={updateText} />
            <button type="submit" className={s.btn} >add task</button>
       </form>
   )

}