import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getProductData } from "../Redux/App/Products/action";

export function Products()
{
    const productData = useSelector(store=>store.productReducer)
    const {payload, isLoading, isError} = productData
    const dispatch = useDispatch();

    console.log(payload)

    useEffect(()=>{
        dispatch(getProductData())
    },[])


    return <h1>Products</h1>
}