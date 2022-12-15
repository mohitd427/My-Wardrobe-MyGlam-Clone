import {Routes, Route} from "react-router-dom";
import { Address } from "../Pages/Address";
import { Bag } from "../Pages/Bag";
import { Checkout } from "../Pages/Checkout";
import { Home } from "../Pages/Home";
import Login from "../Pages/Login";
import { Payment } from "../Pages/Payment";
import { Products } from "../Pages/Products";
import Register from "../Pages/Register";

export function AllRoutes()
{
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/bag" element={<Bag/>}/>
            <Route path="/address" element={<Address/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="/payment" element={<Payment/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
    );
}