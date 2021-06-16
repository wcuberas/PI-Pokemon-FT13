import axios from 'axios';
import { GET_POKEMONS, GET_POKEMONS_TYPES, GET_POKEMONS_DETAIL, SET_POKEMON_DETAIL, POKEMONS_TYPE } from './actionsNames';
import { POKEMON_URL, POKEMON_TYPE, POKEMON_ID } from '../constants';


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
            return axios.get(POKEMON_ID + id).then(response => {
                dispatch({ type: GET_POKEMONS_DETAIL, payload: response.data[0] })
            })
            .catch(error => {
                if(error.response?.status !== 404) alert("Something went wrong")
                dispatch({ type: GET_POKEMONS_DETAIL, payload: null })
            });
    }
}


export function clearDetail() {
    return {
        type: SET_POKEMON_DETAIL, payload: undefined
    }
}