import { Button, Container, Text } from "@chakra-ui/react";
import React from "react";
import { useUserAuth } from "../Context/UserAuthContext";

export function Home() {

    //Logut functionality ------start---------

//   const { user, logOut } = useUserAuth();
//     // console.log("inHome", user.email);
//   const handleLogOut = async () => {
//     try {
//         await logOut();
//     } catch (err) {
//       console.log(err.message);
//     }
//   };

  //Logut functionality ------start---------
  return (
    <>
      {/*  Logout  JSX  -----xxx-----   
      <Container>
        <Text  fontSize={'4xl'}>Welcome To Home Screen</Text>
        {user && <Text fontSize={'2xl'} >Email : {user.email}</Text>}

        <Button colorScheme="red" onClick={handleLogOut}>
          LOGOUT
        </Button>
      </Container> */}

      <h1>Home</h1>
    </>
  );
}
