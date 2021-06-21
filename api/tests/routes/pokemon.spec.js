const { expect } = require('chai');
const assert = require('assert');
const session = require('supertest-session');
const app = require('../../src/app');


const agent = session(app);

const pokemon = {
    name: 'example',
    height: 50,
};

describe('Pokemon routes', () => {
    
    describe('GET /pokemons', () => {
        it('should get 200', () => agent.get('/pokemons').expect(200)).timeout(40000);
        it('should list 40 pokemons', (done) => {
            agent
                .get('/pokemons')
                .expect('Content-Type', /json/)
                .expect(200).timeout(40000)
                .then((response) => response.body)
                .then((array) => {
                    assert.deepStrictEqual(array.length, 40);
                    done();
                });
        });
    });

    describe('GET /pokemons/:id', () => {
        it('should get 200', (done) => {
            agent.get('/pokemons/1').expect(200).timeout(40000);
            done();
        });
        it('should res with 404 if the pokemon is not found.', (done) => {
            agent.get('/pokemons/impossibleToExist').expect(404).timeout(40000);
            done();
        });
    });


    describe('POST /pokemons', () => {
        it('should create a new pokemon', (done) => {
            agent.post('/pokemons').send(pokemon).expect(200);
            done();
        });
    })


})