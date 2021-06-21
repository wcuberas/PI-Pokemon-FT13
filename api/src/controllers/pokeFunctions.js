const axios = require('axios');
const { POKEMON_URL} = require('../constants');
const { Pokemon, Type } = require('../db');


const getAllPokeAPI = async () => {	
    let callURL = await axios.get(`${POKEMON_URL}`);
	let callURLNext = await axios.get(callURL.data.next);
	let allAPI = callURL.data.results.concat(callURLNext.data.results);
		
    for (let poke of allAPI) {
		let pokeDetail = await axios.get(poke.url);
		pokeDetail = pokeDetail.data;
        delete poke.url;

		poke.id = pokeDetail.id;
		poke.hp = pokeDetail.stats[0].base_stat;
		poke.attack = pokeDetail.stats[1].base_stat;
		poke.defense = pokeDetail.stats[2].base_stat;
		poke.speed = pokeDetail.stats[5].base_stat;
		poke.height = pokeDetail.height;
		poke.weight = pokeDetail.weight;
		poke.Types = pokeDetail.types.map((elem) => {
			return {name: elem.type.name};
		});
		poke.sprite = pokeDetail.sprites.other.dream_world.front_default;
	}
    return allAPI;
}

const getAllPokeAPP = async () => {
    return await Pokemon.findAll({ include: {
		model: Type,
		attributes: ['name'],
		through: {
			attributes: [],
		}, 
	}
});
}


const getAllPokemons = async () => {
	let pokemonApi = await getAllPokeAPI();
	let pokemonApp = await getAllPokeAPP();
	let pokemonTotal = pokemonApi.concat(pokemonApp);
	return pokemonTotal;
};


module.exports = {
      getAllPokeAPI,
      getAllPokeAPP,
      getAllPokemons
}
