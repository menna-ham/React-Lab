import { createStore  , applyMiddleware} from "redux";
import FavoriteReducer from "../reducers/FavoriteReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk'


//store and reducer 
const store = createStore(FavoriteReducer , composeWithDevTools(applyMiddleware(thunk)))

export default store;