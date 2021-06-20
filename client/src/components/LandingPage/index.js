import React from 'react'
import { Link } from 'react-router-dom';
import './landing.css'
import logo from '../../image/pokemon.png';

function LandingPage() {
    
    return (
        <div className='landingPage'>
            <div>
                <img className='logo-landing' src={logo}/>
            </div>
            <div className='container-div'>
                
                <div className='title-landing'>
                    <h1>WELCOME</h1>
                    
                </div>
                <div>
                    <Link to={`/home`} > 
                        <button className='btn btn-success btn-large'>ENTER</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;
