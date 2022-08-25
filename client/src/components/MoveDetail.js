import React, { useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { learningPokemonIdState, moveDetailState, moveDetailUrlState, pokedexIdState, pokeFocusState } from '../recoil/atoms'
import { Button, Card, Grid, Typography, CardContent, CardActions } from '@mui/material'
import { Link } from 'react-router-dom';

function MoveDetail() {

    const [moveDetail, setMoveDetail] = useRecoilState(moveDetailState)
    const moveDetailUrl = useRecoilValue(moveDetailUrlState)
    const pokedexId = useRecoilValue(pokedexIdState)
    const mainFocusState = useRecoilValue(pokeFocusState)
    const learningPokemonId = useRecoilValue(learningPokemonIdState)

    
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    useEffect(() => {
        fetch(moveDetailUrl).then(r => r.json()).then(setMoveDetail)
    }, [moveDetailUrl])


    function handleSelectMove() {
        // console.log(moveDetail)
        // console.log(pokedexId)
        // console.log(learningPokemonId)
        const newMoveObj = {
            name: moveDetail.name,
            move_type: moveDetail.type.name,
            flavor_text: moveDetail.flavor_text_entries[0].flavor_text,
            accuracy: moveDetail.accuracy,
            power: moveDetail.power,
            pp: moveDetail.pp,
            pokemon_id: learningPokemonId
        }
        console.log(newMoveObj)
        fetch(`/pokemons/${learningPokemonId}/moves`, {
            method: 'POST',
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(newMoveObj)
        })
        .then(r => r.json())
        .then(d => console.log(d))
    }


  return (
    <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
    >
        <Card sx={{ maxWidth: 500 }} raised={true}>
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
                    onClick={handleSelectMove}
                >
                    {learningPokemonId > 0 ? (`Teach ${moveDetail.name} to ${mainFocusState.name}`) : `Add ${mainFocusState.name} to your team first`}
                </Button>
            </Grid>
            </CardActions>
            <CardContent>
                <Typography gutterBottom variant="h3" component="div" textAlign={'center'}>
                {moveDetail.name.toUpperCase()}
                </Typography>
                <Typography gutterBottom variant="h4" component="div" textAlign={'center'}>
                    Type
                </Typography>
                <Typography gutterBottom variant="h6" component="div" textAlign={'center'}>
                    {capitalizeFirstLetter(moveDetail.type.name)}
                </Typography>
                <Typography gutterBottom variant="h5" component="div" textAlign={'center'}>
                    Flavor Text
                </Typography>
                <Typography gutterBottom variant="body" component="div" textAlign={'center'}>
                    {moveDetail.flavor_text_entries[0].flavor_text}
                </Typography>
                <Typography gutterBottom variant="h5" component="div" textAlign={'center'}>
                    Stats
                </Typography>
                <Typography gutterBottom variant="body" component="div" textAlign={'center'}>
                    Power: {moveDetail.power}
                </Typography>
                <Typography gutterBottom variant="body" component="div" textAlign={'center'}>
                    PP: {moveDetail.pp}
                </Typography>
                <Typography gutterBottom variant="body" component="div" textAlign={'center'}>
                    Accuracy: {moveDetail.accuracy}
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
    </Grid>
  )
}

export default MoveDetail