import React from 'react'
import './loadingSpin.css'

function LoadingSpin() {
    return (
        <div>
            <h2 className="title-form title-spinner">CARGANDO...</h2>
            
            <div className='spinner'>
                <div className='double-bounce1'></div>
                <div className='double-bounce2'></div>
            </div>
        </div>
    )
}

export default LoadingSpin;
