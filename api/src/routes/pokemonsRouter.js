const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { getAllPokemons } = require('../controllers/pokeFunctions');
const { Pokemon } = require('../db')


router.get('/', async (req, res) => {
	const { name } = req.query;
    try {
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
    } catch(error) {
        console.log(error);
    }
	
});


router.get('/:id', async (req, res) => {
    const { id } = req.params;
    
    try {
        let pokemonTotal = await getAllPokemons();
        if(id) {
            let pokeFilter = pokemonTotal.filter( poke => poke.id.toString() === id);
            if(pokeFilter.length) {
                return res.send(pokeFilter)
            } else {
                return res.status(404).send('Pokemon not found');
            }
        }
    } catch(error) {
        console.log(error);
    }
})


router.post('/', async (req, res) => {
    const { name, hp, attack, defense, speed, height, weight, type, sprite } = req.body;
    // name y type son obligatorios por el modelo
    if(!name) //Analizar el caso de que el nombre ya exista
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