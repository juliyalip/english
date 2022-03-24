import { NavLink } from "react-router-dom";
import s from './navMenu.module.css'

export default function NavMenu() {
    return (
    <nav >
        <ul className={s.list}>
            <li className={s.item}><NavLink to="tren">Тренировки</NavLink></li>
            <li className={s.item}><NavLink to="kurts-online">Тренировки</NavLink></li>
            <li className={s.item}><NavLink to="klub-speek">Разговорный клуб</NavLink></li>
            <li className={s.item}><NavLink to="vebinaru">Вебинары</NavLink></li>
             <li className={s.item}><NavLink to="blog">Блог</NavLink></li>
       </ul>
     </nav>
    )
}