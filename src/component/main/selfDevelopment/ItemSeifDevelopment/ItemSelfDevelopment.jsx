import React from 'react';
import s from './itemSelfDeveloper.module.css'

export default function ItemSelfDevelopment({ complited,
    text, translate, onLastIndex, onFirstIndex,
    onComplited, onClickLastBtn , onClickNextBtn}) {
    return (
        <div className={s.containerBtn}>
                 
            <button type="button" onClick={onClickLastBtn} disabled={onFirstIndex}>
                last
            </button>


            <span>{text}</span>
            <div>
                <input type="checkbox" checked={complited} onChange={onComplited} />
                {complited ? <label>{ translate}</label> : <label>translate</label>}
            </div>
            <button type="button" onClick={onClickNextBtn} disabled={onLastIndex}>
                next
            </button>
        </div>
    )
}