import { combineReducers } from 'redux';
import { SIGN_IN, SIGN_OUT } from './actions';

const initialUserState = {
        signedIn: false,
        email: "",
        userType: ""
};

const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case SIGN_IN:
        console.log(action.payload)
      return {
            signedIn: true,
            email: action.payload.email,
            userType: action.payload.userType
      };
    case SIGN_OUT:
      return {
            signedIn: false,
            email: "",
            userType: ""
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
    user: userReducer
});

export default rootReducer;