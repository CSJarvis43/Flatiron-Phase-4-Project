import { Grid } from '@mui/material'
import React, { useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { currentUser, operandState, pokemonTeamState } from '../recoil/atoms'
import TeamCard from './TeamCard'

function TeamContainer() {

    const [pokemonTeam, setPokemonTeam] = useRecoilState(pokemonTeamState)
    const user = useRecoilValue(currentUser)
    const operand = useRecoilValue(operandState)

    
    useEffect(() => {
        fetch('/pokemons').then(r => r.json()).then(d => {
            setPokemonTeam(d)
            console.log(d)
        })
    }, [operand])

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