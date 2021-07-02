import { GET_POKEMONS, GET_POKEMONS_TYPES, GET_POKEMONS_DETAIL, SEARCH_POKEMON, FILTER_POKEMON } from '../actions/actionsNames';

const initialState = {
    allPokemons: [],
    pokemonsTypes: [],
    pokemonDetail: {},
    pokemonSearched: [],
    pokemonFiltered: []
};


function rootReducer(state = initialState, action) {
    switch(action.type) {
        case GET_POKEMONS:
            return {
                ...state,
                allPokemons: action.payload,
                pokemonSearched: [],
                pokemonFiltered: []
            };
        case GET_POKEMONS_TYPES:
            return {
                ...state,
                pokemonsTypes: action.payload
            };
        case GET_POKEMONS_DETAIL:
            return {
                ...state,
                pokemonDetail: action.payload
            };
        case SEARCH_POKEMON:
            return {
                ...state,
                pokemonSearched: [action.payload]
            };
        case FILTER_POKEMON:
            return {
                ...state,
                pokemonFiltered: action.payload
            }    
        default:
            return state;
    }
};




export default rootReducer;