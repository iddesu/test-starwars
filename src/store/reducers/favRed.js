import { omit } from "lodash";

import { ADD_FAV, REMOVE_FAV } from "../consts/actionTypes";
import { getLocalStorage } from "@utils/localStorage";

const initialState = getLocalStorage('store');

const favoriteReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return {
                ...state,
                ...action.payload
            }
        case REMOVE_FAV:
            return omit(state, [action.payload])
        default:
            return state;
    }
}

export default favoriteReducer;