import * as types from "./authActionTypes";
import { auth } from "../../config/firebaseConfig";
import {  createUserWithEmailAndPassword, getAuth } from "firebase/auth"
const registerStart = () => ({
  type: types.REGISTER_START,
});

const registerSuccess = (user) => ({
  type: types.REGISTER_SUCCESS,
  payload: user,
});

const registerFail = (e) => ({
  type: types.REGISTER_FAIL,
  payload: e,
});

export const registerInitiate = (email, password, displayName)=>(dispatch) =>{

    dispatch(registerStart);    
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        user.updateProfile({
          displayName,
        })
        dispatch(registerSuccess(user));
      })
      .catch((e) => dispatch(registerFail(e.message)));
  
};
