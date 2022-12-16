import { FcDataProtection } from "react-icons/fc";
import { Routes, Route } from "react-router-dom";
import ProtectedRoutes from "../Components/ProtectedRoutes";
import { UserAuthContextProvider } from "../Context/UserAuthContext";
import Admin from "../Pages/Admin";
import { Bag } from "../Pages/Bag";
import { Home } from "../Pages/Home";
import Login from "../Pages/Login";
import { Products } from "../Pages/Products";
import Register from "../Pages/Register";
import SingleProductPage from "../Pages/SingleProductPage";


export function AllRoutes() {
  return (
    <UserAuthContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/bag" element={<Bag />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoutes>
              <Admin />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </UserAuthContextProvider>
  );
}

export function AllRoutes()
{
    return(
     <UserAuthContextProvider>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/products/:id" element={<SingleProductPage/>}/>
            <Route path="/bag" element={<Bag/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
              <Route
          path="/admin"
          element={
            <ProtectedRoutes>
              <Admin />
            </ProtectedRoutes>
          }
        />
     
        </Routes>
        </UserAuthContextProvider>
    );
}

