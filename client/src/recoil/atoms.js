import { atom } from "recoil";

export const countState = atom({
    key: 'countState',
    default: 0,
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