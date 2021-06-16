import React from 'react'
import { useState, useEffect } from 'react';
import { Validate } from '../Validate/validate';
import { POKEMON_URL } from '../../constants';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonsTypes } from '../../actions/index';


function CreatePokemon() {

    const [input, setInput] = useState({
        name: '',
        hp: undefined,
        attack: undefined,
        defense: undefined,
        weight: undefined,
        height: undefined,
        speed: undefined,
        type: 1,
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/500.svg'
    })

    const dispatch = useDispatch();
    const pokemonsTypes = useSelector(state => state.pokemonsTypes);
    const [Types, setTypes] = useState([])
    const [Errors, setErrors] = useState({})
    const [stop, setStop] = useState({errors: false, create: false})

    useEffect(() => {
		dispatch(getPokemonsTypes());
	}, [getPokemonsTypes]);

    useEffect(() => {
		if(Types.length) {
			let total = pokemonsTypes.reduce((acc, elem) => {
				if(Types.includes(elem.name) === true) {
					acc.push(elem.id);
				}
				return acc;
			}, []);
			setInput({...input, type: total});
		}
	}, [Types]);


    const handleTypes = (e) => {
		if(Types.length < 2) {
			if (!Types.includes(e.target.value)) {
				setTypes([...Types, e.target.value]);
			}
		} else setTypes([e.target.value]);
	};


    useEffect(() => {
		if(!Object.keys(Errors).length) {
			setStop({...stop, errors: false});
		}
	}, [Errors]);


    const handleInputChange = (e) => {
        setErrors(Validate({
            ...input,
            [e.target.name]: e.target.value
        }));
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
		e.preventDefault();
		if(Object.keys(Errors).length) {
			setStop({...stop, errors: true});
		} else {
			try {
				await axios.post(POKEMON_URL, input);
				setStop({...stop, create: true});
			} catch (err) {
				console.log(err);
			}
		}
	};


    return (
        <div>
           <h1>CREATE POKEMON</h1>
           <form className="" onSubmit={ handleSubmit }>
                {stop.errors ? (
						<div className='div_errors'>
							<ul>
								{Object.values(Errors).map((elem) => (
									<li key={elem} className='li_text'>
										{elem}
									</li>
								))}
							</ul>
						</div>
					) : null}
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
                <label>SPRITE</label>
                <input 
                    type="text"
                    className="form-control"
                    name="sprite"
                    value={input.sprite}
                    onChange={handleInputChange}
                />
                <hr/>
                <div className='div_types'>
						<select onChange={(e) => handleTypes(e)}>
							{pokemonsTypes &&
								pokemonsTypes.map((t, i) => (
									<option key={i} value={t.name}>
										{t.name}
									</option>
								))}
						</select>
						<div className='div_type_container'>
							{Types &&
								Types.map((el, i) => (
									<div key={i} className='div_type'>
										<label className='label'>{el}</label>
									</div>
								))}
						</div>
					</div>
                <button type="submit">CREATE POKEMON</button>
                {stop.create ? (
						<div className='div_create_confirm'>
							<h3 className='message_create'>
								Pokemon created !!!
							</h3>
						</div>
					) : null}
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