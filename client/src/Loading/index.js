import React from 'react'
import './loadingSpin.css'

function LoadingSpin() {
    return (
        <div>
            <h2 className="u-text-center">CARGANDO...</h2>
            <div className="o-pokeball c-loader u-flash"></div>
        </div>
    )
}

export default LoadingSpin;
