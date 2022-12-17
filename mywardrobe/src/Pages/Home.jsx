import React from "react";
import { useUserAuth } from "../Context/UserAuthContext"

export function Home()
{
    const {user} = useUserAuth();
    // console.log("inHome",user.email)
    return <h1>Home</h1>
}