import { configureStore ,applyMiddleware} from "@reduxjs/toolkit";
import rootReducer from './reducer'
import { composeWithDevTools } from "@redux-devtools/extension";
import  { thunk }  from "redux-thunk";
const composedEnhancer = composeWithDevTools(applyMiddleware(thunk))
const store = configureStore({
        reducer: rootReducer,
        composedEnhancer
    }
);

export default store;