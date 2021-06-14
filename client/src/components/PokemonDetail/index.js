import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { clearDetail, getPokemonDetail } from '../../actions/index';

function PokemonDetail() {

    const dispatch = useDispatch();
    const pokemonDetail = useSelector(state => state.pokemonDetail);
    const { id } = useParams();

    useEffect(() => {
        dispatch(getPokemonDetail(id))
        return () => {
            dispatch(clearDetail())
        }
    }, [])
    console.log(pokemonDetail[0])
    return (
        <div>
            {pokemonDetail === undefined && <h1>Cargando...</h1>}
            {typeof pokemonDetail === 'object' && 
                (<div>
                    <img src={pokemonDetail[0].sprite} alt='sprite' />
                    <div>Name: {pokemonDetail[0].name}</div>
                    <div>id: {pokemonDetail[0].id}</div>
                    <div>attack: {pokemonDetail[0].attack}</div>
                    <div>defense: {pokemonDetail[0].defense}</div>
                    <div>hp: {pokemonDetail[0].hp}</div>
                    <div>height: {pokemonDetail[0].height}</div>
                    <div>weight: {pokemonDetail[0].weight}</div>
                    <div>speed: {pokemonDetail[0].speed}</div>
                    <div>Types: {pokemonDetail[0].Types && pokemonDetail[0].Types.map((p,i) => (<div key={i}>{p.name}</div>))}</div>
                </div>)
            }
        </div>
    )
}

export default PokemonDetail;
