import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPokemons } from '../../actions';




function Home() {
    
    const allPokemons = useSelector(state => state.allPokemons);
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(0);
    const [input, setInput] = useState('');

    useEffect(() => {
        dispatch(getPokemons())
    }, []);
    
    const filteredPokemons = () => {
        if(input.length === 0) {
            return allPokemons.slice(currentPage, currentPage + 12);
        }
        const filtered = allPokemons.filter(poke => poke.name.includes(input));
        return filtered.slice(currentPage, currentPage + 12);
    }
    
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

    return (
        <div>
            <button onClick={ prevPage }>Previous</button>
            <button onClick={ nextPage }>Next</button>
            <input 
                type="text"
                placeholder="..."
                value={ input }
                onChange={ handleChange }
            />

                {
                    filteredPokemons() ? filteredPokemons().map(poke => (
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
                    )) : <h1>Cargando...</h1>    
                }    
        </div>
    )
}

export default Home;
