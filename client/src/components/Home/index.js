import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPokemons } from '../../actions';

function Home() {
    
    const allPokemons = useSelector(state => state.allPokemons);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPokemons())
    }, []);
    
    return (
        <div>
                {
                    allPokemons ? allPokemons.map(poke => (
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
