import React from 'react'
import { Grid, Paper, Typography } from '@mui/material';

function Type({type}) {

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    



  return (
    <Grid item sx={4}>
        <Paper elevation={4} sx={{ mx: 2, my: 3, padding: 1.2}}>
            <Typography textAlign={'center'} variant="h5">
                {capitalizeFirstLetter(type)}
            </Typography>
        </Paper>
    </Grid>
  )
}

export default Type