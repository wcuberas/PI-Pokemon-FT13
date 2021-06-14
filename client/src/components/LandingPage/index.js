import React from 'react'
import { Link } from 'react-router-dom';

function LandingPage() {
    return (
        <div>
            <div>
                <h2>POKEMON APP</h2>
            </div>
            <div>
                <h3>WELCOME</h3>
                <p>ACA VA UNA BREVE DESCRPCION</p>
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
