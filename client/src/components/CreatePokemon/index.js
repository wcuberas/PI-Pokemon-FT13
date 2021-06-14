import React from 'react'
import { useState } from 'react';


function CreatePokemon() {

    const [input, setInput] = useState({
        name: '',
        hp: undefined,
        attack: undefined,
        defense: undefined,
        weight: undefined,
        height: undefined,
        speed: undefined,
        type: undefined,
        sprite: ""
    })

    const handleInputChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
    }


    return (
        <div>
           <h1>CREATE POKEMON</h1>
           <form className="" onSubmit={ handleSubmit }>
                <label>NAME</label>
                <input 
                    type="text"
                    className="form-control"
                    name="name"
                    value={input.name}
                    onChange={handleInputChange}
                />
                <hr/>
                <label>HP</label>
                <input
                    type="text"
                    className="form-control"
                    name="hp"
                    value={input.hp}
                    onChange={handleInputChange}
                />
                <hr/>
                <label>ATTACK</label>
                <input 
                    type="text"
                    className="form-control"
                    name="attack"
                    value={input.attack}
                    onChange={handleInputChange}
                />
                <hr/>
                <label>DEFENSE</label>
                <input 
                    type="text"
                    className="form-control"
                    name="defense"
                    value={input.defense}
                    onChange={handleInputChange}
                />
                <hr/>
                <label>WEIGHT</label>
                <input 
                    type="text"
                    className="form-control"
                    name="weight"
                    value={input.weight}
                    onChange={handleInputChange}
                />
                <hr/>
                <label>HEIGHT</label>
                <input 
                    type="text"
                    className="form-control"
                    name="height"
                    value={input.height}
                    onChange={handleInputChange}
                />
                <hr/>
                <label>SPEED</label>
                <input 
                    type="text"
                    className="form-control"
                    name="speed"
                    value={input.speed}
                    onChange={handleInputChange}
                />
                <hr/>
                <label>TYPE</label>
                <input 
                    type="text"
                    className="form-control"
                    name="type"
                    value={input.type}
                    onChange={handleInputChange}
                />
                <hr/>
                <label>SPRITE</label>
                <input 
                    type="text"
                    className="form-control"
                    name="sprite"
                    value={input.sprite}
                    onChange={handleInputChange}
                />
                <hr/>
                <button type="submit">CREATE POKEMON</button>
           </form>
        </div>
    )
}

export default CreatePokemon;


// Formulario controlado con:
// 1--> Detalle de pokemon 
// 2--> Poder agregar mas de un type 
// 3--> Boton para crear el nuevo pokemon (se va a agregar a nuestra BD)

 {/* name
                id
                hp
                attack
                defense
                weight
                height
                speed
                type
                img
                */}