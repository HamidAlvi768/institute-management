// src/store/provinceActions.js
import { SET_SELECTED_PROVINCE, CLEAR_SELECTED_PROVINCE } from './provinceActionTypes';

export const setSelectedProvince = (province) => ({
    type: SET_SELECTED_PROVINCE,
    payload: province,
});

export const clearSelectedProvince = () => ({
    type: CLEAR_SELECTED_PROVINCE,
});
