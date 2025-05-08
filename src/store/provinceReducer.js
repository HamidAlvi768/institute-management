// src/store/provinceReducer.js
import { SET_SELECTED_PROVINCE, CLEAR_SELECTED_PROVINCE } from './provinceActionTypes';

const initialState = {
    selectedProvince: null,
};

export default function provinceReducer(state = initialState, action) {
    switch (action.type) {
        case SET_SELECTED_PROVINCE:
            return { ...state, selectedProvince: action.payload };
        case CLEAR_SELECTED_PROVINCE:
            return { ...state, selectedProvince: null };
        default:
            return state;
    }
}
