import { Box, Button, Card, CardMedia, Container, Grid, Paper, Typography, CardContent, CardActions } from '@mui/material'
import React, { useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { detailTargetState, pokeFocusState } from '../recoil/atoms'
import { Link } from 'react-router-dom';
import Moves from './Moves';
import Type from './Type';
import Stats from './Stats';

function DetailCard() {

    const detailTarget = useRecoilValue(detailTargetState)
    const [mainFocusState, setMainFocusState] = useRecoilState(pokeFocusState)

    useEffect(() => {
        fetch(detailTarget).then(r => r.json()).then(setMainFocusState)
    }, [])

    console.log(mainFocusState)

    const IMG_URL = mainFocusState["sprites"]["versions"]["generation-vii"]["ultra-sun-ultra-moon"]["front_default"]
    const SHINY_URL = mainFocusState["sprites"]["versions"]["generation-vii"]["ultra-sun-ultra-moon"]["front_shiny"]

    



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
                <Grid container>
                    {mainFocusState.moves.map(m => (
                        <Moves
                            key={m.move.name}
                            move={m.move.name}
                            details={m.version_group_details}
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
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    </Grid>
  )
}

export default DetailCard