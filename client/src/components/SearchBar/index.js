import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPokemonSearch } from '../../actions';


function SearchBar({id, name}) {

  const [input, setInput] = useState('');
  const PokemonDetail = useSelector(state => state.PokemonDetail);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInput(e.target.value);
};

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getPokemonSearch(input));
  }

  return (
    <div>
      <h2 className="buscador">Find your Pokemon...</h2>
      <form className="form-container" onSubmit={(input) => handleSubmit(input)}>
      <div>
        <label className="label" htmlFor="title">Pokemon:... </label>
        <input
          type="text"
          id="title"
          autoComplete="off"
          value={input}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div>    {/*Falta solucionar el tema del link a la pagina pokemonDetail */}
        <button 
          type="submit">
          <Link to={`/pokemon/`}>{name}</Link>
          SEARCH
        </button>
      </div>
     </form>
    
    
    
  </div>
);
}

export default SearchBar;


