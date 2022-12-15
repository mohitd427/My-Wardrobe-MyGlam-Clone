import * as types from "./authActionTypes";
import {auth} from "../../config/firebaseConfig"

const registerStart = () => ({
    type: types.REGISTER_START,
})

const registerSuccess = (user) => ({
    type: types.REGISTER_SUCCESS,
    payload:user
})

const registerFail = (e) => ({
    type: types.REGISTER_FAIL,
    payload:e
})

export const registerInitiate = (email, password, displayName) => {
  return function (dispatch) {
    dispatch(registerStart())
    auth.createUserWithEmailAndPassword(email,password)
    .then(({user})=>{
        user.updateProfile({
            displayName
        })
        dispatch(registerSuccess(user))
    }).catch(e=>dispatch(registerFail(e.message)))
  }
}