const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { getAllPokeAPI, getAllPokeAPP, getAllPokemons } = require('../controllers/pokeFunctions');
const { Pokemon, Type } = require('../db')


router.get('/', async (req, res) => {
	const { name } = req.query;
	let pokemonTotal = await getAllPokemons();
	if (name) {
		let pokeFilter = pokemonTotal.filter( poke => poke.name === name );

		if(pokeFilter.length) {
            return res.send(pokeFilter)
        } else {
            return res.status(404).send('Pokemon not found');
        }
    }
	return res.send(pokemonTotal);
});


router.get('/:id', async (req, res) => {
    const { id } = req.params;
    let pokemonTotal = await getAllPokemons();
    if(id) {
        let pokeFilter = pokemonTotal.filter( poke => poke.id === parseInt(id));
        if(pokeFilter.length) {
            return res.send(pokeFilter)
        } else {
            return res.status(404).send('Pokemon not found');
        }
    }
})


router.post('/', async (req, res) => {
    const { name, hp, attack, defense, speed, height, weight, type, sprite } = req.body;
    // name y type son obligatorios por el modelo
    if(!name)
		return res.status(400).send('Error: Parameter name are required'); 
    if(!type)
        return res.status(400).send('Error: Parameter type are required'); 
    try {
        const pokemonCreated = await Pokemon.create({
            id: uuidv4(),
            name,
            hp,
            attack,
            defense,
            speed,
            height,
            weight,
            sprite,
        });
        await pokemonCreated.setTypes(type);
        return res.send(pokemonCreated);
    } catch(error) {
        console.log(error);
    }
    
    });



module.exports = router;