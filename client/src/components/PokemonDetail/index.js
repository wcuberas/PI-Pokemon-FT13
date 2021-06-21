import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { clearDetail, getPokemonDetail } from '../../actions/index';
import LoadingSpin from '../../Loading';
import Error404 from '../Error404';
import './pokemonDetail.css';

function PokemonDetail() {

    const dispatch = useDispatch();
    const pokemonDetail = useSelector(state => state.pokemonDetail);
    const { id } = useParams();

    useEffect(() => {
        dispatch(getPokemonDetail(id))
        return () => {
            dispatch(clearDetail())
        }
    }, [dispatch, id])

    if(pokemonDetail === null) {
        return <Error404 />
    } else if(pokemonDetail === undefined) {
        return <LoadingSpin />
    } else {
        return (
        <div className='container-main'>    
            <div className='container-pokeDetail'>
                <img className='img-pokeDetail' src={pokemonDetail.sprite} alt='sprite' />
                <div className='detailPokemon'>
                    <div> <font color='#2541B2'>Name:</font>  <font color='#1768AC'>{pokemonDetail.name}</font> </div>
                    <div> <font color='#2541B2'>id: </font> <font color='#1768AC'>{pokemonDetail.id}</font></div>
                    <div> <font color='#2541B2'>attack:</font> <font color='#1768AC'>{pokemonDetail.attack}</font></div>
                    <div> <font color='#2541B2'>defense:</font> <font color='#1768AC'>{pokemonDetail.defense}</font></div>
                    <div> <font color='#2541B2'>hp:</font> <font color='#1768AC'>{pokemonDetail.hp}</font></div>
                    <div> <font color='#2541B2'>height:</font> <font color='#1768AC'>{pokemonDetail.height}</font></div>
                    <div> <font color='#2541B2'>weight:</font> <font color='#1768AC'>{pokemonDetail.weight}</font></div>
                    <div> <font color='#2541B2'>speed:</font> <font color='#1768AC'>{pokemonDetail.speed}</font></div>
                    <div> <font color='#2541B2'>Types:</font> <font color='#1768AC'>{pokemonDetail.Types && pokemonDetail.Types.map((p,i) => (<div key={i}>{p.name}</div>))}</font></div>
                </div>
            </div>
        </div>
        )
    }
}

export default PokemonDetail;
