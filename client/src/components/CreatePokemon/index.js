import React from 'react'
import { useState, useEffect } from 'react';
import { Validate } from '../Validate/validate';
import { POKEMON_URL } from '../../constants';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonsTypes } from '../../actions/index';
import './createPokemon.css';


function CreatePokemon() {

    const [input, setInput] = useState({
        name: '',
        hp: '',
        attack: '',
        defense: '',
        weight: '',
        height: '',
        speed: '',
        type: 1,
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/500.svg'
    })

    const dispatch = useDispatch();
    const pokemonsTypes = useSelector(state => state.pokemonsTypes);
    const [Types, setTypes] = useState([])
    const [Errors, setErrors] = useState({})
    const [stop, setStop] = useState({errors: false, create: false}) //Avisa si hay errores o alertas

    useEffect(() => {
		dispatch(getPokemonsTypes());
	}, [getPokemonsTypes]);


    useEffect(() => {
		if(!Object.keys(Errors).length) {
			setStop({...stop, errors: false});
		}
	}, [Errors]);


    useEffect(() => {
		setErrors(Validate(input));
	}, [input]);



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



    const handleInputChange = (e) => {
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
        <div className='div-container-form'>
           <h1 className='title-form'>CREATE POKEMON</h1>
           <form className="form-container" onSubmit={ handleSubmit }>
                {stop.errors ? (
						<div>
							<ul className='alert alert-danger'>
								{Object.values(Errors).map((elem) => (
									<li  key={elem}>
										{elem}
									</li>
								))}
							</ul>
						</div>
					) : null}
                <label className='form-label'>NAME</label>
                <input 
                    type="text"
                    className="form-control"
                    name="name"
                    value={input.name}
                    onChange={handleInputChange}
                />
                <br/>
                <label className='form-label'>HP</label>
                <input
                    type="text"
                    className="form-control"
                    name="hp"
                    value={input.hp}
                    onChange={handleInputChange}
                />
                <br/>
                <label className='form-label'>ATTACK</label>
                <input 
                    type="text"
                    className="form-control"
                    name="attack"
                    value={input.attack}
                    onChange={handleInputChange}
                />
                <br/>
                <label className='form-label'>DEFENSE</label>
                <input 
                    type="text"
                    className="form-control"
                    name="defense"
                    value={input.defense}
                    onChange={handleInputChange}
                />
                <br/>
                <label className='form-label'>WEIGHT</label>
                <input 
                    type="text"
                    className="form-control"
                    name="weight"
                    value={input.weight}
                    onChange={handleInputChange}
                />
                <br/>
                <label className='form-label'>HEIGHT</label>
                <input 
                    type="text"
                    className="form-control"
                    name="height"
                    value={input.height}
                    onChange={handleInputChange}
                />
                <br/>
                <label className='form-label'>SPEED</label>
                <input 
                    type="text"
                    className="form-control"
                    name="speed"
                    value={input.speed}
                    onChange={handleInputChange}
                />
                <br/>
                <label className='form-label'>SPRITE</label>
                <input 
                    type="text"
                    className="form-control"
                    name="sprite"
                    value={input.sprite}
                    onChange={handleInputChange}
                />
                <br/>
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
									<div key={i} >
										<label className='type-label-create'>{el}</label>
									</div>
								))}
						</div>
					</div>
                <button className='btn-form' type="submit">CREATE POKEMON</button>
                {stop.create ? (
						<div className='div_create_confirm'>
							<h3 className='btn btn-message-create'>
								Pokemon created !!!
							</h3>
						</div>
					) : null}
           </form>
        </div>
    )
}

export default CreatePokemon;

