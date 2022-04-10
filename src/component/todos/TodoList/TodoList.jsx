import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getTodosSelector } from '../../../redux/todos/todos-selector';
import todoActions from "../../../redux/todos/todos-action";
import TodoItem from '../TodoItem/TodoItem';
import s from './todoList.module.css'

export default function TodoList() {
    const dispatch = useDispatch();

    const onDelete = todoId => {
        dispatch(todoActions.deleteTaskSuccess(todoId))
    }
    const onComplited = todoId => {
        dispatch(todoActions.complitedTaskSuccess(todoId))
    }
    
    const items = useSelector(getTodosSelector)
    return (
        <ul className={s.container}>
            {items.map(({id, complited, text })=> (
                <TodoItem key={id} text={text} complited={complited}
                    onTaskComplited={() => onComplited(id)}
                    onTaskDelete={()=> onDelete(id)}/>
            ))}
        </ul>
    )
}