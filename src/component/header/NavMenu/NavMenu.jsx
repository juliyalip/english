import { NavLink } from "react-router-dom";
import { useState } from 'react';
import { ReactComponent as Up } from '../../../images/up.svg';
import { ReactComponent as Doun } from '../../../images/down.svg';
import VisibleMenu from "../VisibleMenu/VisibleMenu";

import s from './navMenu.module.css';





export default function NavMenu() {
    const [isVisibleMenu, setIsVisibleMenu] = useState(false);

    const openSubMenu = () => {
        setIsVisibleMenu(prevState => !prevState)
    }



    return (
    <nav >
        <ul className={s.list}>
                <li className={s.item} onClick={openSubMenu}><NavLink to="#" className={s.icon}>Тренировки
                    {isVisibleMenu ? <Up className={s.icon} /> : <Doun className={s.icon} />}
                    
                  
                </NavLink>
                      {isVisibleMenu && < VisibleMenu /> }
                </li>
            
            <li className={s.item}><NavLink to="klub-speek">Разговорный клуб</NavLink></li>
            <li className={s.item}><NavLink to="vebinaru">Вебинары</NavLink></li>
             <li className={s.item}><NavLink to="blog">Блог</NavLink></li>
       </ul>
     </nav>
    )
}