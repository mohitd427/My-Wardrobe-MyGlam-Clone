import {Routes, Route} from "react-router-dom";
import { Bag } from "../Pages/Bag";
import { Home } from "../Pages/Home";
import { Products } from "../Pages/Products";

export function AllRoutes()
{
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/bag" element={<Bag/>}/>
        </Routes>
    );
}