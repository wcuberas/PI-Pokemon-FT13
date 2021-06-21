import React from 'react'
import perro404 from '../../image/perro-pokemon.png';
import './error404.css';

function Error404() {
    return (
        <div className='container-404'>
            <h2 className='title-form'>ERROR 404</h2>
            <h3 className='str-404'>UPS! That’s an error</h3>
            <img className='img-404' src={perro404}/>
        </div>
    )
}

export default Error404;
