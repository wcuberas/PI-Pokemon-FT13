import axios from 'axios';
import { GET_POKEMONS, GET_POKEMONS_TYPES, GET_POKEMONS_DETAIL, SEARCH_POKEMON, FILTER_POKEMON } from './actionsNames';
import { POKEMON_URL, POKEMON_TYPE, POKEMON_ID, POKEMON_NAME } from '../constants';


export function getPokemons() {
    return (dispatch) => {
            axios.get(POKEMON_URL).then(response => {
                dispatch({ type: GET_POKEMONS, payload: response.data })
            })
            .catch(error => {
                if(error.response?.status !== 404) alert("Something went wrong")
                dispatch({ type: GET_POKEMONS, payload: null })
            });
    }
}


export function getPokemonsTypes() {
    return (dispatch) => {
            axios.get(POKEMON_TYPE).then(response => {
                dispatch({ type: GET_POKEMONS_TYPES, payload: response.data })
            })
            .catch(error => console.log(error));
    }
}


export function getPokemonDetail(id) {
    return (dispatch) => {
            return axios.get(POKEMON_ID + id).then(response => {
                dispatch({ type: GET_POKEMONS_DETAIL, payload: response.data[0]})
            })
            .catch(error => {
                if(error.response?.status !== 404) alert("Something went wrong")
                dispatch({ type: GET_POKEMONS_DETAIL, payload: null })
            });
    }
}

export function clearDetail() {
    return {
        type: GET_POKEMONS_DETAIL, payload: undefined
    }
}

export const searchPokemon = (name) => async (dispatch) => {
    try {
      const res = await axios.get(POKEMON_NAME + name);
      dispatch({type: SEARCH_POKEMON , payload: res.data});
    } catch (error) {
      /* dispatch({type: SEARCH_POKEMON , payload: null}); */
      console.log(error)
    }
  };

export const filterPokemon = (types, array) => (dispatch) =>{
    const type1 = new RegExp(types);
    const res = array.filter(c => c.types.match(type1));
    dispatch({type: FILTER_POKEMON, payload: [...res]})
  
  };

  export const filterApi = (creator, array) => (dispatch) => {
    if(creator === 'api') {
     const res = array.filter(c  =>typeof c.id === 'number')
     dispatch({type: FILTER_POKEMON, payload: [...res]})
    }
    if(creator === 'db') {
     const res = array.filter(c  =>typeof c.id === 'string')
     dispatch({type: FILTER_POKEMON, payload: [...res]})
    } 
    if(creator === 'all') {
      dispatch({type: FILTER_POKEMON, payload: [...array]})
    }
    if(creator === 'null') {
      dispatch({type: FILTER_POKEMON, payload: []})
    }
  }

export const orderApi = (condition, array) => (dispatch) => {
    if(condition === 'az') {
      const nombre1 = array.sort((a,b) => a.name > b.name ? 1 : -1)
      dispatch({type: FILTER_POKEMON, payload:[...nombre1]})
    }
    if(condition === 'za') {
      const nombre2 = array.sort((a,b) => a.name < b.name ? 1 : -1);
      dispatch({type: FILTER_POKEMON, payload:[...nombre2]}) 
    }
    if(condition === 'attack+'){
      const attack = array.sort((a,b) => a.hp > b.hp ? 1 : -1);
      dispatch({type: FILTER_POKEMON, payload:[...attack]}) 
    }
    if(condition === 'attack-'){
      const attack = array.sort((a,b) => a.hp < b.hp ? 1 : -1);
      dispatch({type: FILTER_POKEMON, payload:[...attack]}) 
    }
    if(condition === 'null') {
      dispatch({type: FILTER_POKEMON, payload: []})
    }
  }