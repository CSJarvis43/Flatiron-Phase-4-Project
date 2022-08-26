import { Button, Container, Grid, Typography, Box } from '@mui/material'
import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { offsetState, pokemonsState } from '../recoil/atoms'
import PokemonCard from './PokemonCard'

const sectionStyle = {
    height: "100vh",
  
    backgroundImage:
      "url('https://static.vecteezy.com/system/resources/previews/001/987/871/original/abstract-black-stripes-diagonal-background-free-vector.jpg') ",
  
    backgroundRepeat: "repeat",
    backgroundSize: "cover"
  };

function PokedexContainer() {

    const [pokemons, setPokemons] = useRecoilState(pokemonsState)
    const [offset, setOffset] = useRecoilState(offsetState)

    

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/?limit=100&offset=${offset}`).then(r => r.json()).then(p => setPokemons(p.results))
    } ,[offset])

    // console.log(pokemons)

    function handleNext() {
        setOffset(offset + 100)
    }

    function handlePrev() {
        setOffset(offset - 100)
    }

    // function renderPokemonCards(pokemon) {
    //     <PokemonCard pokemon={pokemon}/>
    // }



  return (
    <Grid >
        <Grid container>
            {pokemons.map(p => (
                <PokemonCard 
                    key={p.name}
                    pokemon={p}
                />
            ))}
        </Grid>
        <Container maxWidth="false">
            <Grid container>
                <Grid item xs={12} align="center" justify="center">
                    <Button
                        variant='contained'
                        onClick={handlePrev}
                    >
                        Prev Page
                    </Button>
                    <Button
                        variant='contained'
                        onClick={handleNext}
                    >
                        Next Page
                    </Button>
                </Grid>
            </Grid>
        </Container>
    </Grid>
  )
}

export default PokedexContainer