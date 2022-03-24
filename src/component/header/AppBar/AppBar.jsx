import React from 'react';
import {Link} from 'react-router-dom'
import Navigation from '../Navigation/Navigation';
import NavMenu from '../NavMenu/NavMenu';
import UserMenu from '../UserMenu/UserMenu';
import s from './appbar.module.css'

export default function AppBar() {
    return (
       
        <header >
            <div className={s.header}>

           <div className={s.container}>
            <span className={s.logo} > <Link to="#"><span className={s.span}>Logo </span> English</Link></span>
                    <Navigation />
                    <UserMenu />
                </div>


                </div>
           
            <NavMenu />
             </header>
           
    )
}