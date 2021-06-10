const axios = require('axios');
const { POKEMON_URL, LIMIT_POKEMON } = require('../constants');
const { Pokemon, Type } = require('../db');


// Trae los primeros 'LIMIT_POKEMON' pokemons de la API
const getAllPokeAPI = async () => {
      let callURL = await axios
            .get(`${POKEMON_URL}?limit=${LIMIT_POKEMON}`);
      let allAPI = callURL.data.results;
// Averiguar si hay una manera de q la info venga mas rapido...Promise.all ???
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
