import { Button, Card, CardMedia, Grid, Typography, CardContent, CardActions } from '@mui/material'
import { Link } from 'react-router-dom';
import React from 'react'
import { useSetRecoilState } from 'recoil';
import { pokemonTeamState } from '../recoil/atoms';

function TeamCard({pokemon}) {


    const setPokemonTeam = useSetRecoilState(pokemonTeamState)

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function handleSetFree(p) {
        fetch(`/pokemons/${p.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "Application/json",
            },
        })
    }


  return (

    <Card sx={{ maxWidth: 500 }}>
        <CardMedia
            component={'img'}
            image={pokemon.sprite}
        >
        </CardMedia>
        <CardActions>
        <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
        >
            <Button
                // component={Link}
                // to={'/team'}
                onClick={() => handleSetFree(pokemon)}
            >
                Set {pokemon.name} free
            </Button>
        </Grid>
        </CardActions>
        <CardContent>
            <Typography gutterBottom variant="h3" component="div" textAlign={'center'}>
            {pokemon.name.toUpperCase()}
            </Typography>
            <Typography gutterBottom variant="h4" component="div" textAlign={'center'}>
                Pokedex Number
            </Typography>
            <Typography gutterBottom variant="h6" component="div" textAlign={'center'}>
                {pokemon.entry_number}
            </Typography>
            <Typography gutterBottom variant="h5" component="div" textAlign={'center'}>
                Ability
            </Typography>
            <Typography gutterBottom variant="subtitle1" component="div" textAlign={'center'}>
                {capitalizeFirstLetter(pokemon.ability)}
            </Typography>
        </CardContent>
        <CardActions>
        <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
        >
            <Button
                component={Link}
                to={'/'}
            >
                Back to Pokedex
            </Button>
        </Grid>
        </CardActions>
    </Card>

  )
}

export default TeamCard