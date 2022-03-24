import React from 'react';
import CardKurs from '../CardKurs/CardKurs';
import s from './kursSection.module.css'

export default function KursSection({items}) {
    return (
        <ul className={s.container}>
            {items.map(({ id, url, title, description }) => (
             <CardKurs key={id} url={url} title={title} description={description} />
         ))}

        </ul>
    )
    
}