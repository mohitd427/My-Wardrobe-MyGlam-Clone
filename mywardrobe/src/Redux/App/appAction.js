import * as types from "./appActionType"
import axios from "axios"


// get function -
export const getData = ()=> (dispatch)=>
{
    dispatch({type: types.GET_REQUEST})
    return axios
        .get("https://mywardrob-database-versel-phi.vercel.app/data")
        .then(res=>{
            dispatch({type: types.GET_SUCCESS, payload: res.data})
            // console.log(res.data)
        })
        .catch(err=>dispatch({type: types.GET_ERROR}))
}