import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPokemons, getPokemonsTypes } from '../../actions';
import LoadingSpin from '../../Loading';
import './home.css';



function Home() {
   
    const allPokemons = useSelector(state => state.allPokemons);
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(0);
    const [input, setInput] = useState('');
    const pokemonsTypes = useSelector(state => state.pokemonsTypes);
    const [filteredPokemons, setFilteredPokemons] = useState([])
    

    useEffect(() => {
        dispatch(getPokemons())
    }, []);

    useEffect(() => {
        dispatch(getPokemonsTypes())
    }, []);

    useEffect(() => {
        const filtered = input.length === 0 ? allPokemons : allPokemons.filter(poke => poke.name.includes(input));
        const filteredPoke = filtered.slice(currentPage, currentPage + 12);
        setFilteredPokemons(filteredPoke);
    }, [allPokemons,input, currentPage]);
    

    const nextPage = () => {
        if(allPokemons.filter(poke => poke.name.includes(input)).length > currentPage + 12) 
            setCurrentPage(currentPage + 12);     
    }

    const prevPage = () => {
        if(currentPage > 0) 
        setCurrentPage(currentPage - 12);
    }
   
    const handleChange = (e) => {
        setCurrentPage(0);
        setInput(e.target.value);
    };

    const handleOrderChange = (e) => {
        if(e.target.value === 'All') dispatch(getPokemons());
        if(e.target.value === 'A-Z') {
            const result = allPokemons.sort((a,b) => a.name > b.name ? 1 : -1)
            setFilteredPokemons(result);
        }
        if(e.target.value === 'Z-A') {
            const result = allPokemons.sort((a,b) => a.name < b.name ? 1 : -1);
            setFilteredPokemons(result);
        }
        if(e.target.value === 'more HP') {
            const result = allPokemons.sort((a,b) => a.hp > b.hp ? 1 : -1);
            setFilteredPokemons(result);
        }
        if(e.target.value === 'less HP') {
            const result = allPokemons.sort((a,b) => a.hp < b.hp ? 1 : -1);
            setFilteredPokemons(result);
        }
    }


    const handleFilterChange = (e) => {
        if(e.target.value === 'All') {
            dispatch(getPokemons());
        } else {
            let arrayPoke = allPokemons.filter(el => 
                el.Types.length ? el.Types[0].name === e.target.value
                                ? true 
                                : el.Types.length > 1 ? el.Types[1] === e.target.value
                                ? true : false
                                : false
                                : false);
                                setFilteredPokemons(arrayPoke);
        }
    }
    
    const handleFilterUserChange = (e) => {
        if(e.target.value === 'All') {
            dispatch(getPokemons())
        } else if(e.target.value === 'API') {
            let filterApi = allPokemons.filter(el => 
                typeof el.id === 'number' );
                setFilteredPokemons(filterApi)
        } else if(e.target.value === 'CREATED BY USER') {
            let filterApi = allPokemons.filter(el => 
                typeof el.id === 'string' );
                setFilteredPokemons(filterApi)
        }
    }   
        if(filteredPokemons.length === 0) {
            return <LoadingSpin />
        } else {
        
        return ( 
            <div className='container-home'>
                <h3 className='title-home title-form'>FIND YOUR POKEMON</h3>
                <div className='group-inputSearch'>
                    <button className='btn btn-paginate btn-success' onClick={ prevPage }>Previous</button>
                    <button className='btn btn-paginate btn-success' onClick={ nextPage }>Next</button>
                    <input 
                        className='input-search'
                        type="text"
                        placeholder="Pokemon name here..."
                        value={ input }
                        onChange={ handleChange }
                    />
                </div>
                <br />
                <div className='group-filters'>
                    <div className='container-orderHome'>
                        <h4 className='title-orderHome'>ORDER</h4>
                        <select className='select-orderHome' name="select" onChange={(e) => handleOrderChange(e)}>
                            <option value='All'>ALL</option>
                            <option value='A-Z'>A-Z</option>
                            <option value='Z-A'>Z-A</option>  
                            <option value='more HP'>more HP</option>  
                            <option value='less HP'>less HP</option>  
                        </select>
                    </div>
                    <div className='container-orderHome'>
                        <h4 className='title-orderHome'>FILTER BY TYPE</h4>
                        <select className='select-orderHome' name="select" onChange={(e) => handleFilterChange(e)}>
                            <option value='All'>ALL</option>
                            {pokemonsTypes && pokemonsTypes.map(type => (
                                <option key={type.id} value={type.name}>{type.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className='container-orderHome'>
                        <h4 className='title-orderHome'>FILTER BY USER</h4>
                        <select className='select-orderHome' name="select" onChange={(e) => handleFilterUserChange(e)}>
                            <option value='All'>ALL</option>
                            <option value='API'>API</option>
                            <option value='CREATED BY USER'>CREATED BY USER</option>
                        
                        </select>
                    </div>
                </div>
                <div className='container-cards'>
                    { 
                        filteredPokemons ? filteredPokemons.map(poke => (
                        <div  key={poke.id}>
                            <Link className='card-pokemon' to={`/pokemon/${poke.id}`}>
                                <span className='title-poke' >{poke.name}</span>
                                <img className='img-poke' src={poke.sprite} />
                                <div className='container-types-home'>
                                    {poke.Types && poke.Types.map((p,i) => (
                                        <div className='type-poke-home' key={i}>
                                            {p.name}
                                        </div>
                                    ))}
                                </div>
                            </Link>
                        </div>
                        )) : <h1 className='title-form'>NOT FOUND !!!</h1>    
                    }  
                </div>  
            </div>
        ) 
    }
}

export default Home;
