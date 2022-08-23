import { atom } from "recoil";
import { bulbasaur } from "./defaultdata";

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