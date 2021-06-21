import React from 'react'
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import logo from '../../image/pokemon.png';


export default function NavBar() {
    return (
            <nav className="navbar">
                    <div className='nav-div1'>
                        <NavLink to={`/home`}>
                            <img className='logoPokemon' src={logo} />
                        </NavLink>
                    </div>
                    <div className='nav-div2'>
                        <NavLink className='div-nav-total' to={`/home`}>HOME</NavLink>
                    </div>
                    <div className='nav-div3'>
                        <NavLink className='div-nav-total ' to={`/create`}>CREATE POKEMON</NavLink>
                    </div>
            </nav>
    )
}