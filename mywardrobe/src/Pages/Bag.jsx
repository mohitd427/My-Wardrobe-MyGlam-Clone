import { useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
import { getData } from "../Redux/App/appAction";

export function Bag ()
{
    const bagData = useSelector(store=>store)
    console.log(bagData)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getData())
    },[])


    return <h1>Bag</h1>
}