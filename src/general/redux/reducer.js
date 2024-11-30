import { combineReducers } from 'redux';
import { SIGN_IN, SIGN_OUT } from './actions';
import userList from "../../data/userList.json";
//import stylistData from "../../data/hairdresserList.json";

const initialUserState = {
  signedIn: false,
  email: "",
  userId: 0,
  userType: ""
};

const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case SIGN_IN:
      
      if (userList[action.payload.hash_id] !== undefined) {
        var target = userList[action.payload.hash_id];
        if (target.password === action.payload.hash_pw) {
          console.log("HIT")
          // Loading user data as part of login.
          sessionStorage.setItem("token", JSON.stringify(action.payload.hash_id));

          if (target.userType === "stylist") {
            sessionStorage.setItem("isStylist", true);
          } else {
            sessionStorage.setItem("isStylist", false);
          }

          sessionStorage.setItem("favorites", target.favorites);
          sessionStorage.setItem("name", target.name);
          sessionStorage.setItem("lastname", target.lastname);

          return {
            signedIn: true,
            email: action.payload.email,
            userType: action.payload.userType
          };
        }
      }

      return {
          signedIn: false,
          email: "",
          userType: "notfound"
      }
    case SIGN_OUT:
      sessionStorage.clear();
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
