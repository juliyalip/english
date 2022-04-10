import React, { useState } from 'react';
import { ReactComponent as Plus } from '../../images/plus.svg';
import {ReactComponent as Close} from '../../images/cross.svg'
import TodoForm from '../../component/todos/TodoForm/TodoForm';
import TodoList from '../../component/todos/TodoList/TodoList';
import s from './task.module.css'


export default function Taski() {

    const [isVisibleForm, setVisibleForm] = useState(false);

    const toggleForm = () => {
        setVisibleForm(prevState => ! prevState)
    }

    return (
        <div className={s.containerTaski}>
            <p className={s.btnPlus} onClick={toggleForm}>
                {isVisibleForm ? <Close className={s.icon} /> :  <Plus className={s.icon} /> }
               </p>
            {isVisibleForm && <TodoForm toggleForm={toggleForm} />}
            <TodoList />
        </div>
    )
}