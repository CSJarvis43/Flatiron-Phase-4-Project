import { Box, Button, Card, CardMedia, Container, Grid, Paper, Typography, CardContent, CardActions } from '@mui/material'
import React, { useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { currentUser, detailTargetState, pokeFocusState } from '../recoil/atoms'
import { Link } from 'react-router-dom';
import Move from './Move';
import Type from './Type';
import Stats from './Stats';

function DetailCard() {

    const detailTarget = useRecoilValue(detailTargetState)
    const [mainFocusState, setMainFocusState] = useRecoilState(pokeFocusState)
    const user = useRecoilValue(currentUser)

    useEffect(() => {
        fetch(detailTarget).then(r => r.json()).then(setMainFocusState)
    }, [])

    // console.log(mainFocusState)

    const IMG_URL = mainFocusState["sprites"]["versions"]["generation-vii"]["ultra-sun-ultra-moon"]["front_default"]
    const SHINY_URL = mainFocusState["sprites"]["versions"]["generation-vii"]["ultra-sun-ultra-moon"]["front_shiny"]

    function handleCatch() {
        const newPkmnObj = {
            name: mainFocusState.name,
            ability: mainFocusState.abilities[0].ability.name,
            entry_number: mainFocusState.id,
            sprite: IMG_URL,
            user_id: user.id
        }
        fetch('/pokemons', {
            method: 'POST',
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(newPkmnObj)
        })
        .then(r => r.json())
    }





  return (
    <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
    >
        <Card sx={{ maxWidth: 500 }}>
            <CardMedia
                component={'img'}
                image={IMG_URL}
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
                    component={Link}
                    to={'/team'}
                    onClick={handleCatch}
                >
                    {mainFocusState.name}, I Choose You!
                </Button>
            </Grid>
            </CardActions>
            <CardContent>
                <Typography gutterBottom variant="h3" component="div" textAlign={'center'}>
                {mainFocusState.name.toUpperCase()}
                </Typography>
                <Typography gutterBottom variant="h4" component="div" textAlign={'center'}>
                    Type
                </Typography>
                <Grid 
                    container
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="center"
                >
                    {mainFocusState.types.map(t => (
                        <Type 
                            key={t.type.name}
                            type={t.type.name}
                        />
                    ))}
                </Grid>
                <Typography gutterBottom variant="h4" component="div" textAlign={'center'}>
                    Move List
                </Typography>
                <Typography gutterBottom variant="subtitle1" component="div" textAlign={'center'}>
                    Click for details
                </Typography>
                <Grid container>
                    {mainFocusState.moves.map(m => (
                        <Move
                            key={m.move.name}
                            move={m.move.name}
                            details={m.version_group_details}
                            url={m.move.url}
                            entryNumber={mainFocusState.id}
                        />
                    ))}
                </Grid>
                <Typography gutterBottom variant="h4" component="div" textAlign={'center'}>
                    Base Stats
                </Typography>
                <Grid 
                    container
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="center"
                >
                    {mainFocusState.stats.map(s => (
                        <Stats
                            key={s.stat.name}
                            stat={s.stat.name}
                            base={s.base_stat}
                        />
                    ))}
                </Grid>
            </CardContent>
            <Typography gutterBottom variant="h4" component="div" textAlign={'center'}>
                Shiny Sprite
            </Typography>
            <CardMedia
                component={'img'}
                image={SHINY_URL}
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

export default DetailCard