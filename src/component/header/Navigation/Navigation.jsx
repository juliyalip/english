import { NavLink } from "react-router-dom";
import s from './navigation.module.css'


export default function Navigation() {
    return (
        <ul className={s.list}>
            <li className={s.item}><NavLink to="/home" >home</NavLink></li>
            <li className={s.item}><NavLink to="/viber">english on Viber</NavLink></li>
            <li className={s.item}><NavLink to="/online"> traning onLine</NavLink></li>
        </ul>
    )
}