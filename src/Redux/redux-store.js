import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import authReduser from "./auth-Reduser";
import dialogsReduser from './dialogs-reduser';
import profileReduser from './profile-reduser';
import usersReduser from "./users-Reduser";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
 
let redusers = combineReducers({
    profilePage:profileReduser,
    dialogsPage:dialogsReduser,
    humansPage:usersReduser,
    auth:authReduser,
    form:formReducer,
    
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(redusers,composeEnhancers(applyMiddleware(thunkMiddleware)));
window.store=store;
export default store;