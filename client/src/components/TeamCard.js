import { Button, Card, CardMedia, Grid, Typography, CardContent, CardActions, Box, Container, Paper } from '@mui/material'
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil';
import { currentUser, operandState, pokemonTeamState, teamMovesState } from '../recoil/atoms';
import TeamMove from './TeamMove';

function TeamCard({pokemon}) {

    const [teamMoves, setTeamMoves] = useRecoilState(teamMovesState)
    const [operand, setOperand] = useRecoilState(operandState)

    useEffect(() => {
        fetch(`/moves`).then(r => r.json()).then(d => setTeamMoves(d))
    }, [operand])

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
        .then(setOperand(operand + 1))
    }

    function handleForgetMove(m) {
        fetch(`/moves/${m.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "Application/json",
            },
        })
        .then(setOperand(operand + 1))
    }

    // console.log(teamMoves)
    
    const individualMoves = teamMoves.filter(m => m.pokemon_id === pokemon.id)
    
    // console.log(individualMoves)

  return (

    <Card sx={{ maxWidth: 500, my: 2 }}>
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
            <Typography gutterBottom variant="h5" component="div" textAlign={'center'}>
                Known Moves
            </Typography>
                {individualMoves.map(m => (
                    <Grid>
                        <Paper elevation={4} sx={{ mx: 1, my: .4, padding: 1}}>
                            <Typography variant='h5' textAlign={'center'}>
                                {capitalizeFirstLetter(m.name)}
                            </Typography>
                            <Typography variant='subtitle2' textAlign={'center'}>
                                {m.flavor_text}
                            </Typography>
                            <Typography variant='h5' textAlign={'center'}>
                                {capitalizeFirstLetter(m.move_type)}
                            </Typography>
                            <Typography variant='h6' textAlign={'center'}>
                                Stats
                            </Typography>
                            <Typography variant='subtitle1' textAlign={'center'}>
                                Power: {m.power} Accuracy: {m.accuracy} PP: {m.pp}
                            </Typography>
                            <Grid
                                container
                                direction="row"
                                justifyContent="space-evenly"
                                alignItems="center"
                            >
                                <Button
                                    // component={Link}
                                    // to={'/team'}
                                    onClick={() => handleForgetMove(m)}
                                >
                                    Forget {m.name}
                                </Button>
                            </Grid>
                        </Paper>
                    </Grid>
                ))}
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