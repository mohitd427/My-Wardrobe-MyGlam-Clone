import * as types from "./appActionType"
import axios from "axios"

const getProductRequest=()=>{
    return{
        type:types.GET_PRODUCTS_REQUEST,
    }
}

const getProductSuccess=(payload)=>{
    return{
        type:types.GET_PRODUCTS_SUCCESS,
        payload
    }
}

const getProductError=()=>{
    return{
        type:types.GET_PRODUCTS_ERROR,
    }
}

const getProducts=(params)=>async (dispatch)=>{
dispatch(getProductRequest())
    try {
        const r = await axios.get(" https://mywardrob-database-versel-phi.vercel.app/Product_array",params)
        console.log(r.data)
        dispatch(getProductSuccess(r.data))
    } catch (e) {
        dispatch(getProductError())
    }
}

getProducts()
export {getProducts}

//pranay work done


