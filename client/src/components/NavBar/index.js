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
                    <div className='div-nav-total nav-div2'>
                        <NavLink to={`/home`}>HOME</NavLink>
                    </div>
                    <div className='div-nav-total nav-div3'>
                        <NavLink to={`/create`}>CREATE POKEMON</NavLink>
                    </div>
            </nav>
    )
}