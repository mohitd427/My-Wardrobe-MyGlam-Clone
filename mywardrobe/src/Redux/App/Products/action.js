import * as types from "./actionType"
import axios from "axios"


// get function -
export const getProductData = ()=> (dispatch)=>
{
    dispatch({type: types.GET_PRODUCT_REQUEST})
    return axios
        .get("https://mywardrob-database-versel-phi.vercel.app/Product_array")
        .then(res=>{
            dispatch({type: types.GET_PRODUCT_SUCCESS, payload: res.data})
           // console.log(res.data)
        })
        .catch(err=>dispatch({type: types.GET_PRODUCT_ERROR}))
}

// add bag function -
export const addProductData = (payload)=> (dispatch)=>
{
    dispatch({type: types.ADD_PRODUCT_REQUEST})
    return axios
        .post(`https://mywardrob-database-versel-phi.vercel.app/Bag`,JSON.stringify(payload),{
            headers: { 'Content-Type': 'application/json' },
          })
        .then(res=>{
            dispatch({type: types.ADD_PRODUCT_SUCCESS, payload: res.data})
            // console.log(res.data)
        })
        .catch(err=>dispatch({type: types.ADD_PRODUCT_ERROR}))
}