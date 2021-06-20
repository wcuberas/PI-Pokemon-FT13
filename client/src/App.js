import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import NavBar from './components/NavBar';
import Home from './components/Home';
import PokemonDetail from './components/PokemonDetail';
import CreatePokemon from './components/CreatePokemon';


function App() {

  return (
    <div className="App">
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/home' component={NavBar} />
      <Route exact path='/home' component={Home} />
      <Route exact path='/pokemon/:id' component={NavBar} />
      <Route exact path='/pokemon/:id' component={PokemonDetail} />
      <Route exact path='/create' component={NavBar} />
      <Route exact path='/create' component={CreatePokemon} />
    </div>
  );
}

export default App;
