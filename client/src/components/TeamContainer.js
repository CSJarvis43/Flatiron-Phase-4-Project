import { Grid } from '@mui/material'
import React, { useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { currentUser, pokemonTeamState } from '../recoil/atoms'
import TeamCard from './TeamCard'

function TeamContainer() {

    const [pokemonTeam, setPokemonTeam] = useRecoilState(pokemonTeamState)
    const user = useRecoilValue(currentUser)

    useEffect(() => {
        fetch('pokemons').then(r => r.json()).then(d => setPokemonTeam(d))
    }, [pokemonTeam])

    // console.log(pokemonTeam)

    const ownerPokemonTeam = pokemonTeam.filter(p => p.user_id === user.id)

    // console.log(ownerPokemonTeam)


  return (
    <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
    >
        {ownerPokemonTeam.map(p => (
            <TeamCard 
                key={p.id}
                pokemon={p}
            />
        ))}
    </Grid>
  )
}

export default TeamContainer