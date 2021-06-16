import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { clearDetail, getPokemonDetail } from '../../actions/index';
import LoadingSpin from '../../Loading';

function PokemonDetail() {

    const dispatch = useDispatch();
    const pokemonDetail = useSelector(state => state.pokemonDetail);
    const [ loading, setLoading ] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        dispatch(getPokemonDetail(id))
        return () => {
            dispatch(clearDetail())
        }
    }, [dispatch, id])

    useEffect(() => {
        if (pokemonDetail.sprite) setLoading(false);
    }, [ pokemonDetail ]);

            return ( !loading ? 
            <div>
                <img src={pokemonDetail.sprite} alt='sprite' />
                <div>Name: {pokemonDetail.name}</div>
                <div>id: {pokemonDetail.id}</div>
                <div>attack: {pokemonDetail.attack}</div>
                <div>defense: {pokemonDetail.defense}</div>
                <div>hp: {pokemonDetail.hp}</div>
                <div>height: {pokemonDetail.height}</div>
                <div>weight: {pokemonDetail.weight}</div>
                <div>speed: {pokemonDetail.speed}</div>
                <div>Types: {pokemonDetail.Types && pokemonDetail.Types.map((p,i) => (<div key={i}>{p.name}</div>))}</div>
            </div>
            : <LoadingSpin />
            )
}

export default PokemonDetail;
