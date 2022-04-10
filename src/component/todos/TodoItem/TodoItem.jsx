import React from 'react';
import s from './todoItem.module.css'

export default function TodoItem({ complited, text , onTaskComplited, onTaskDelete}) {
    
    
    return (
        <li className={s.container}>
            <p>{text}</p>
            <input type="checkbox" checked={complited} onChange={onTaskComplited} />
           <button type="button" onClick={onTaskDelete} >delete</button> 

        
        </li>
    )
}