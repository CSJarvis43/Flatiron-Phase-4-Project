import { Grid, Paper, Typography } from '@mui/material';
import React from 'react'

function Moves({ move, details }) {

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    // console.log(details)


  return (
    <Grid>
        <Paper elevation={4} sx={{ mx: 1, my: .4, padding: 1}}>
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

export default Moves