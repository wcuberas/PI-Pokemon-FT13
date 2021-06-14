import React from 'react'
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <header className="navbar">
            <nav>
                    <div>
                        <NavLink to={`/home`}>LOGO O NOMBRE DE LA APP</NavLink>
                    </div>
                    <div>
                        <NavLink to={`/home`}>HOME</NavLink>
                    </div>
                    <div>
                        <NavLink to={`/create`}>CREATE POKEMON</NavLink>
                    </div>
            </nav>
        </header>
    )
}