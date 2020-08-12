import React, { useState } from 'react'
import { MenuItems } from './MenuItems'
import './Navbar.css'

export default function Navbar() {
    const [ clicked, setClicked ] = useState(false)
    return(
        <nav className="NavbarItems">
            <h1 className="navbar-logo"><i className="fab fa-react"></i>React Conference</h1>

            <div className="menu-icon" onClick={ () => setClicked(!clicked)}>

                <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                
            </div>
            <ul className={clicked ? 'nav-menu-active' : 'nav-menu'}>
                {MenuItems.map((item, index) => {
                    return (
                        <li>
                            <a className={item.cName} href={item.url}>
                                {item.title}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}