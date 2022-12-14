import {Routes, Route} from "react-router-dom";
import { Bag } from "../Pages/Bag";
import { Home } from "../Pages/Home";
import Login from "../Pages/Login";
import { Products } from "../Pages/Products";
import Register from "../Pages/Register";

export function AllRoutes()
{
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/bag" element={<Bag/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
    );
}