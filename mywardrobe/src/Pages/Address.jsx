import { Box, Flex, Input, Text, Button, Alert, AlertIcon, AlertTitle, AlertDescription } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAddress, postAddress } from "../Redux/App/Address/action";
import { SuccessfullySubmit } from "../Components/SuuccessfullSubmit";


export function Address()
{
    const [value, setValue] = useState();
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [pincode, setPincode] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [address, setAddress] = useState("");
    const [isActive, setIsActive] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const checkout = ()=>{
        if(name !== "" && phone !== "" && pincode !== "" && city !== "" && state !== "" && address !== "")
        {
            const param = {
                name,
                phone,
                pincode,
                city,
                state,
                address
            }
            dispatch(postAddress(param)).then(()=>dispatch(getAddress()))
            // console.log("Successfull")
            navigate("/checkout")
        }
        else
        {
            alert("Please fill all details")
        }
    }

    const changeAddressButtonColor = ()=>{
        setIsActive(()=>!isActive)
    }
   
    return (
        <Box align={"center"} m={"auto"} width={{base:"95%", md:"80vw",lg:"70vw"}} fontSize={{base:12, md:14, lg:16}} >
            <Text fontWeight={500} fontSize={{base:20, md:22, lg:24}} mb={5} >ADD NEW ADDRESS</Text>
            <Box align={"left"} width={"100%"} pb={5} borderBottom={"8px solid #eeeeee"} >
                <Text fontSize={16} fontWeight={500} mb={2}>Contact</Text>
                <Flex justify={"space-between"}>
                    <Box>
                    <Input focusBorderColor='black.400' placeholder="Please enter your name" fontSize={{base:10, md:14, lg:16}} border={"1px solid red"} onChange={(e)=>setName(e.target.value)}/>
                    </Box>
                    <Input
                    fontSize={{base:10, md:14, lg:16}}
                    width={"50%"}
                    type="number"
                    onChange={(e)=>setPhone(e.target.value)}
                    placeholder="Enter phone number"
                    />
                </Flex>
            </Box>
            <Box align={"left"} width={"100%"} pt={5} >
                <Text fontSize={16} fontWeight={500} mb={2}>Address</Text>
                <Flex justify={"space-between"} >
                    <Input focusBorderColor='black.400' fontSize={{base:10, md:14, lg:16}} placeholder="Pincode" border={"1px solid red"} onChange={(e)=>setPincode(e.target.value)}/>
                    <Input focusBorderColor='black.400' fontSize={{base:10, md:14, lg:16}} placeholder="City" border={"1px solid red"} onChange={(e)=>setCity(e.target.value)}/>
                    <Input focusBorderColor='black.400' fontSize={{base:10, md:14, lg:16}} placeholder="State" border={"1px solid red"} onChange={(e)=>setState(e.target.value)}/>
                </Flex>
                <Box mb={5}>
                <Input fontSize={{base:10, md:14, lg:16}} width={{base:"100%", md:"50vw",lg:"30vw"}} focusBorderColor='black.400' placeholder="Address" border={"1px solid red"} mt={5} onChange={(e)=>setAddress(e.target.value)} />
                </Box>
                <Box>
                    <Text>Type of address</Text>
                    <Flex>
                        <Text border={"1px solid"} pl={3} pr={3} mt={2} mb={2} mr={5} borderRadius={"5px"} cursor={"pointer"} onClick={changeAddressButtonColor} style={{backgroundColor: isActive ? 'salmon' : '',color: isActive ? 'white' : '',}} name="btn" >Home</Text>
                        <Text border={"1px solid"} pl={3} pr={3} mt={2} mb={2} borderRadius={"5px"} cursor={"pointer"} >Office</Text>
                    </Flex>
                </Box>
                <Flex mt={10} justify={"space-between"} >
                    <Link to="/bag"><Button backgroundColor={"#ff9797"} fontSize={{base:10, md:14, lg:16}}>Back</Button></Link>
                    <Button backgroundColor={"#ff9797"} onClick={checkout} fontSize={{base:10, md:14, lg:16}}>Checkout</Button>
                </Flex>
            </Box>
        </Box>
    )
}