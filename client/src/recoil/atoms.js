import { atom } from "recoil";
import { bulbasaur, flamethrower } from "./defaultdata";

export const pokemonsState = atom({
    key: 'pokemons',
    default: [],
})

export const usernameState = atom({
    key: 'usernameState',
    default: "",
})

export const passwordState = atom({
    key: 'passwordState',
    default: "",
})

export const passwordConfirmationState = atom({
    key: 'passwordConfirmationState',
    default: "",
})

export const currentUser = atom({
    key: 'currentUser',
    default: null,
})

export const showPassword = atom({
    key: 'showPassword',
    default: false,
})

export const detailTargetState = atom({
    key: 'detailTargetState',
    default: [],
})

export const offsetState = atom({
    key: 'offsetState',
    default: 0,
})

export const pokeFocusState = atom({
    key: 'pokeFocusState',
    default: bulbasaur,
})

export const moveDetailUrlState = atom({
    key: 'moveDetailUrlState',
    default: 'https://pokeapi.co/api/v2/move/53/',
})

export const pokedexIdState = atom({
    key: 'pokedexIdState',
    default: 1,
})

export const moveDetailState = atom({
    key: 'moveDetailState',
    default: flamethrower,
})

export const pokemonTeamState = atom({
    key: 'pokemonTeamState',
    default: [],
})

export const operandState = atom({
    key: 'operandState',
    default: 0,
})

export const teamMovesState = atom({
    key: 'teamMovesState',
    default: [],
})

export const learningPokemonIdState = atom({
    key: 'learningPokemonIdState',
    default: 0,
})