import React from 'react'
import { Grid, Paper, Typography } from '@mui/material';

function Stats({stat, base}) {

    console.log(stat.name)

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


  return (
    <Grid item sx={12}>
        <Paper elevation={4} sx={{ mx: 2, my: 3, padding: 1.2}}>
            <Typography textAlign={'center'} variant="h5">
                {capitalizeFirstLetter(stat)}: {base}
            </Typography>
        </Paper>
    </Grid>
  )
}

export default Stats