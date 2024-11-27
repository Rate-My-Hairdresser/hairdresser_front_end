import { combineReducers } from 'redux';
import { SIGN_IN, SIGN_OUT } from './actions';

const initialUserState = {
  signedIn: false,
  email: "",
  userId: 0,
  userType: ""
};

const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        signedIn: true,
        email: action.payload.email,
        userId: action.payload.userId,
        userType: action.payload.userType
      };
    case SIGN_OUT:
      return {
        signedIn: false,
        email: "",
        userId: 0,
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