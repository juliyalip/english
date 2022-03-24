import { Link } from 'react-router-dom'
import s from './cardKurs.module.css'

export default function CardKurs({ url, title, description }) {
    
    return (<li >
        
        <div className={s.container}>
                <img src={url} alt={title} width="150" height="120" className={s.image}/>
            <div className={s.contText}>
                <Link to="#" className={s.title}>{title}</Link>
                <p>{ description}</p>
            </div>

            </div>
            
        </li>
    )

}