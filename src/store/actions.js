// Layout
export * from "./layout/actions";

// Authentication module
export * from "./auth/register/actions"
export * from "./auth/login/actions"
export * from "./auth/forgetpwd/actions"
export * from "./auth/profile/actions"

// Institute Metrics Filters
export const SET_SELECTED_YEAR = 'SET_SELECTED_YEAR';
export const SET_SELECTED_MINISTRY = 'SET_SELECTED_MINISTRY';
export const SET_SELECTED_DEPARTMENT = 'SET_SELECTED_DEPARTMENT';
export const SET_INSTITUTE_METRICS_DATA = 'SET_INSTITUTE_METRICS_DATA';

export const setSelectedYear = (year) => ({ type: SET_SELECTED_YEAR, payload: year });
export const setSelectedMinistry = (ministry) => ({ type: SET_SELECTED_MINISTRY, payload: ministry });
export const setSelectedDepartment = (department) => ({ type: SET_SELECTED_DEPARTMENT, payload: department });
export const setInstituteMetricsData = (data) => ({ type: SET_INSTITUTE_METRICS_DATA, payload: data });