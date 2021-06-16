import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import NavBar from './components/NavBar';
import Home from './components/Home';
import SearchBar from './components/SearchBar';
import PokemonDetail from './components/PokemonDetail';
import CreatePokemon from './components/CreatePokemon';



function App() {

  return (
    <div className="App">
      <Route exact path='/' component={LandingPage} />
      <Route path='/home' component={NavBar} />
      <Route path='/home' component={Home} />
      <Route path='/pokemon/:id' component={PokemonDetail} />
      <Route path='/create' component={CreatePokemon} />

    </div>
  );
}

export default App;
