import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPokemons, getPokemonsTypes } from '../../actions';
import LoadingSpin from '../../Loading';



function Home() {
    
    const allPokemons = useSelector(state => state.allPokemons);
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(0);
    const [input, setInput] = useState('');
    const [ Loading, setLoading ] = useState(false);
    const pokemonsTypes = useSelector(state => state.pokemonsTypes);
    const [filteredPokemons, setFilteredPokemons] = useState([])


    useEffect(() => {
        setLoading(true);
        dispatch(getPokemons())
    }, []);

    useEffect(() => {
        dispatch(getPokemonsTypes())
    }, []);

    
    useEffect(() => {
        const filtered = input.length === 0 ? allPokemons : allPokemons.filter(poke => poke.name.includes(input));
        //const filteredPoke = filtered.slice(currentPage, currentPage + 12);
        //setFilteredPokemons(allPokemons)
        setFilteredPokemons(filtered.slice(currentPage, currentPage + 12));
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
        if(e.target.value === 'All') setFilteredPokemons(filteredPokemons);
        if(e.target.value === 'A-Z') {
            const result = (((filteredPokemons.sort((a,b) => a.name > b.name ? 1 : -1))))
            setFilteredPokemons(result);
        }
        if(e.target.value === 'Z-A') {
            const result = ((filteredPokemons.sort((a,b) => a.name < b.name ? 1 : -1)));
            setFilteredPokemons(result);
        }
        if(e.target.value === 'more HP') {
            const result = ((filteredPokemons.sort((a,b) => a.hp > b.hp ? 1 : -1)));
            setFilteredPokemons(result);
        }
        if(e.target.value === 'less HP') {
            const result = ((filteredPokemons.sort((a,b) => a.hp < b.hp ? 1 : -1)));
            setFilteredPokemons(result);
        }
    }


    const handleFilterChange = (e) => {
        if(e.target.value === 'All') console.log(filteredPokemons);
        let arrayPoke = filteredPokemons.filter(el => 
            el.Types.length ? el.Types[0].name === e.target.value
                            ? true 
                            : el.Types.length > 1 ? el.Types[1] === e.target.value
                            ? true : false
                            : false
                            : false);
                            console.log(arrayPoke);
    }
    // Falta el filtro por pokemons existentes y los creados por el usuario

    return ( 
        <div>
            <h3>FIND YOUR POKEMON</h3>
            <button onClick={ prevPage }>Previous</button>
            <button onClick={ nextPage }>Next</button>
            <input 
                type="text"
                placeholder="..."
                value={ input }
                onChange={ handleChange }
            />
            <br />
            <div>
                <h4>ORDER</h4>
                <select name="select" onChange={(e) => handleOrderChange(e)}>
                    <option value='All'>ALL</option>
                    <option value='A-Z'>A-Z</option>
                    <option value='Z-A'>Z-A</option>  
                    <option value='more HP'>more HP</option>  
                    <option value='less HP'>less HP</option>  
                </select>
            </div>
            <div>
            <h4>FILTER</h4>
            <select name="select" onChange={(e) => handleFilterChange(e)}>
                <option value='All'>All</option>
                {pokemonsTypes && pokemonsTypes.map(type => (
                    <option key={type.id} value={type.name}>{type.name}</option>
                ))}
            </select>
            </div>
                
                { 
                    filteredPokemons ? filteredPokemons.map(poke => (
                    <div key={poke.id}>
                        <Link to={`/pokemon/${poke.id}`}>
                            <span>{poke.name}</span>
                            <img src={poke.sprite} />
                            {poke.Types && poke.Types.map((p,i) => (
                                <div key={i}>
                                    {p.name}
                                </div>
                            ))}
                             <hr/>
                        </Link>
                    </div>
                    )) : <h1>NOT FOUND !!!</h1>    
                }    
        </div>
    ) 
}

export default Home;
