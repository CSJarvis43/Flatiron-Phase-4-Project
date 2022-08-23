import { Button, Paper, Typography, Grid, Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { detailTargetState } from '../recoil/atoms';
import './PokemonCard.css'

function PokemonCard({ pokemon }) {

    const [detailTarget, setDetailTarget] = useRecoilState(detailTargetState)

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function handleDetails() {
        setDetailTarget(pokemon.url)
    }

    console.log(detailTarget)

  return (
    <Grid item xs={1} className={'pokeGrid'}>
        <Paper
            elevation={5}
            sx={{ m:2, padding: 2, border: 4, borderColor: '#850101', borderRadius: '50%', background: '#B20101' }}
        >
            <Typography
                variant='h5'
                textAlign={'center'}
                color={'white'}
            >
                {capitalizeFirstLetter(pokemon.name)}
            </Typography>
            <Box
                className='buttonBox'
                sx={{ m: 3.2}}
                margin="auto"
            >
                <Button
                    variant='contained'
                    className='pokeButton'
                    sx={{ color: 'white'}}
                    onClick={handleDetails}
                    component={Link}
                    to="/details"
                >
                    Open
                </Button>
            </Box>
        </Paper>
    </Grid>
  )
}

export default PokemonCard