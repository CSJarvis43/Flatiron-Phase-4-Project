import { Grid, Paper, Typography } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { learningPokemonIdState, moveDetailUrlState, pokedexIdState, pokemonTeamState } from '../recoil/atoms';

function Move({ move, details, url, entryNumber, learnerPokemon }) {

    const [pokedexId, setPokedexId] = useRecoilState(pokedexIdState)
    const [moveUrl, setMoveUrl] = useRecoilState(moveDetailUrlState)
    const setLearningPokemonId = useSetRecoilState(learningPokemonIdState)


    const navigate = useNavigate()

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function handleMoveDetail() {
        // setLearningPokemonId(learnerPokemon[0].id)
        // learnerPokemon.length === 0 ? null : setLearningPokemonId(learnerPokemon[0].id)
        if (learnerPokemon.length === 0) {
            console.error({error: "Pokemon Not In Team"})
        } else {
            setLearningPokemonId(learnerPokemon[0].id)
        }
        setPokedexId(entryNumber)
        setMoveUrl(url)
        navigate('/move')
        
    }

    // console.log(moveUrl)
    // console.log(learnerPokemon)


  return (
    <Grid>
        <Paper elevation={4} sx={{ mx: 1, my: .4, padding: 1}} onClick={handleMoveDetail}>
            <Typography textAlign={'center'}>
                {capitalizeFirstLetter(move)}
            </Typography>
            <Typography textAlign={'center'}>
                Lv.{details[0].level_learned_at}
            </Typography>
            <Typography textAlign={'center'}>
                Source: {capitalizeFirstLetter(details[0].move_learn_method.name)}
            </Typography>
        </Paper>
    </Grid>
  )
}

export default Move