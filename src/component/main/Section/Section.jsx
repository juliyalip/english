import React from 'react';
import s from './section.module.css'

export default function Section({ title, children }) {
    return (
        <section className={s.container}>
            {title && <h2 className={s.title}>{title}</h2>}
            {children}
        </section>
    )
}