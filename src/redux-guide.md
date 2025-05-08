Redux
Upzet React is having routing setup based on React-Redux & Redux-Saga. The Store configurations are located in src/store folder.

All module's actions are exported from src/store/actions.js file, All module's reducer are exported from src/store/reducers.js file, All module's saga are exported from src/store/sagas.js file, The src/store/index.js file is handling global redux-store of the template.

How To Create Actions & Saga ?
This example is created with new module's actions & saga creation.

Create a folder named with your module in src/store folder and then create actions.js, saga.js, reducer.js & actionTypes.js files and follow the pattern of other modules added in this template.
Add your action name in the actionTypes.js file. E.g.
export const GET_USERS_LIST = "GET_USERS_LIST"
Create the action in the action.js file. And make sure you pass the same action type as a type parameter which you added in actionTypes.js file E.g.
export const getUsersList = (filters) => {
  return {
    type: GET_USERS_LIST,
    payload: filters,
  }
}
type : action name

payload : action parameters (if any)

Add your action to the reducer.js as well. E.g.
import { GET_USERS_LIST } from "./actionTypes"
        
const INIT_STATE = {
  users: [],
}
        
const contacts = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_USERS_LIST:
      return {
        ...state,
        users: action.payload,
      }
            
    default:
      return state
    }
}
        
export default contacts
Add saga function & watcher for action in saga.js file. E.g.
function* getUsersList() {
  try {
    // you can perform any action here, E.g. call the api for get user's list                           
  } catch (error) {
    // error handler                                 
  }
}

// watchers
function* contactsSaga() {
  yield takeEvery(GET_USERS_LIST, getUsersList)
}
                                      
export default usersSaga;
Store Actions & Reducers
Layout :
This store modules is made for layout's actions, it handles theme customizer's actions & values. You can find actions, reducer & saga files in src/store/layout folder.

Authentication :
This store modules handles app authentication. You can find actions, reducer & saga files in src/store/auth folder.

Calendar :
This store modules handles app Calendar's functionalities. You can find actions, reducer & saga files in src/store/calendar folder.