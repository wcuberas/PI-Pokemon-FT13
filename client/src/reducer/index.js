import { GET_POKEMONS, GET_POKEMONS_TYPES, GET_POKEMONS_DETAIL } from '../actions/actionsNames';

const initialState = {
    allPokemons: [],
    pokemonsTypes: [],
    pokemonDetail: undefined
};


function rootReducer(state = initialState, action) {
    switch(action.type) {
        case GET_POKEMONS:
            return {
                ...state,
                allPokemons: action.payload
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
        default:
            return state;
    }
};




export default rootReducer;