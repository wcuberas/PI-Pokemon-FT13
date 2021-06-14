import axios from 'axios';
import { GET_POKEMONS, GET_POKEMONS_TYPES, GET_POKEMONS_DETAIL, SET_POKEMON_DETAIL } from './actionsNames';
import { POKEMON_URL, POKEMON_TYPE, POKEMON_ID, POKEMON_NAME } from '../constants';


export function getPokemons() {
    return (dispatch) => {
            axios.get(POKEMON_URL).then(response => {
                dispatch({ type: GET_POKEMONS, payload: response.data })
            })
            .catch(error => console.log(error));
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
            axios.get(POKEMON_ID + id).then(response => {
                dispatch({ type: GET_POKEMONS_DETAIL, payload: response.data })
            })
            .catch(error => console.log(error));
    }
}



export function getPokemonSearch(name) {
    return (dispatch) => {
            axios.get(POKEMON_NAME + name).then(response => {
                dispatch({ type: GET_POKEMONS_DETAIL, payload: response.data })
            })
            .catch(error => console.log(error));
    }
}


export function clearDetail() {
    return {
        type: SET_POKEMON_DETAIL, payload: undefined
    }
}