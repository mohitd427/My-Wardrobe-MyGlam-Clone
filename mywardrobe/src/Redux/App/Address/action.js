import * as types from "./actionType"
import axios from "axios"

// get address function -
export const getAddress = ()=> (dispatch)=>
{
    dispatch({type: types.GET_ADDRESS_REQUEST})
    return axios
        .get(`https://mywardrob-database-versel-phi.vercel.app/address`)
        .then(res=>{
            dispatch({type: types.GET_ADDRESS_SUCCESS, payload: res.data})
            // console.log(res.data)
        })
        .catch(err=>dispatch({type: types.GET_ADDRESS_ERROR}))
}


// post address function -
export const postAddress = (payload)=> (dispatch)=>
{
    dispatch({type: types.ADD_ADDRESS_REQUEST})
    return axios
        .post(`https://mywardrob-database-versel-phi.vercel.app/address`, payload)
        .then(res=>{
            dispatch({type: types.ADD_ADDRESS_SUCCESS, payload: res.data})
            // console.log(res.data)
        })
        .catch(err=>dispatch({type: types.ADD_ADDRESS_ERROR}))
}


// update address function -
export const updateAddress = (id)=> (dispatch)=>
{
    dispatch({type: types.UPDATE_ADDRESS_REQUEST})
    return axios
        .patch(`https://mywardrob-database-versel-phi.vercel.app/address`)
        .then(res=>{
            dispatch({type: types.UPDATE_ADDRESS_SUCCESS, payload: res.data})
            // console.log(res.data)
        })
        .catch(err=>dispatch({type: types.UPDATE_ADDRESS_ERROR}))
}