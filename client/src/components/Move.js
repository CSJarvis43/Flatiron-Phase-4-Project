import { Grid, Paper, Typography } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { moveDetailUrlState, pokedexIdState } from '../recoil/atoms';

function Move({ move, details, url, entryNumber }) {

    const [pokedexId, setPokedexId] = useRecoilState(pokedexIdState)
    const [moveUrl, setMoveUrl] = useRecoilState(moveDetailUrlState)

    const navigate = useNavigate()

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function handleMoveDetail() {
        setPokedexId(entryNumber)
        setMoveUrl(url)
        navigate('/move')
    }

    // console.log(moveUrl)
    // console.log(pokedexId)


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