import { combineReducers } from "redux";

// Front
import Layout from "./layout/reducer";


// Authentication
import forgetPassword from "./auth/forgetpwd/reducer";
import login from "./auth/login/reducer";
import profile from "./auth/profile/reducer";
import account from "./auth/register/reducer";
import provinceReducer from "./provinceReducer";
import instituteMetricsReducer from './instituteMetricsReducer';

const rootReducer = combineReducers({
  province: provinceReducer,
  instituteMetrics: instituteMetricsReducer,
  // public
  Layout,
  forgetPassword,
  login,
  profile,
  account,
});

export default rootReducer;
