import { ADD_FAV, REMOVE_FAV } from "../consts/actionTypes"

export const setFavorite = person => ({
    type: ADD_FAV,
    payload: person
})

export const removeFavorite = personId => ({
    type: REMOVE_FAV,
    payload: personId
})