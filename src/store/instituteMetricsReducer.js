import {
  SET_SELECTED_YEAR,
  SET_SELECTED_MINISTRY,
  SET_SELECTED_DEPARTMENT,
  SET_INSTITUTE_METRICS_DATA
} from './actions';

const initialState = {
  selectedYear: '2025',
  selectedMinistry: null,
  selectedDepartment: null,
  metricsData: null,
};

export default function instituteMetricsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SELECTED_YEAR:
      return { ...state, selectedYear: action.payload };
    case SET_SELECTED_MINISTRY:
      return { ...state, selectedMinistry: action.payload };
    case SET_SELECTED_DEPARTMENT:
      return { ...state, selectedDepartment: action.payload };
    case SET_INSTITUTE_METRICS_DATA:
      return { ...state, metricsData: action.payload };
    default:
      return state;
  }
} 