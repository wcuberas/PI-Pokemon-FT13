import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPokemonSearch } from '../../actions';



function SearchBar() {

  
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  

  const handleChange = (e) => {
    setInput(e.target.value);
};

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(getPokemonSearch(input));
  // }

  return (
    <div>
      <h2 className="buscador">Find your Pokemon...</h2>
      {/* <form className="form-container" onSubmit={(input) => handleSubmit(input)}> */}
      <div>
        <label className="label" htmlFor="title">Pokemon name </label>
        <input
          type="text"
          placeholder="..."
          autoComplete="off"
          value={input}
          onChange={ handleChange }
        />
      </div>
  
     {/* </form> */}
    
    
  </div>
);
}

export default SearchBar;


