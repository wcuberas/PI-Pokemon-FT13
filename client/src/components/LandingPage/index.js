import React from 'react'
import { Link } from 'react-router-dom';
import './landing.css'

function LandingPage() {

    return (
        <div className='landingPage'>
            <div>
                <h2>POKEMON APP</h2>
            </div>
            <div>
                <h3>WELCOME</h3>
                
            </div>
            <div className='div-btn'>
                <Link to={`/home`} > 
                    <button>ENTER</button>
                </Link>
            </div>
        </div>
    )
}

export default LandingPage;
