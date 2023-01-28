import { Box, Flex, Input, Text, Button, Alert, AlertIcon, AlertTitle, AlertDescription } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAddress, postAddress } from "../Redux/App/Address/action";


export function Address()
{
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
            dispatch(postAddress(param)).then(dispatch(getAddress()))
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
            <Text fontWeight={700} fontSize={{base:24, md:28, lg:28}} mb={5} mt={5} >ADD NEW ADDRESS</Text>
            <Box align={"left"} width={"100%"} pb={5} borderBottom={"8px solid #eeeeee"} >
                <Text pb={2} mb={5} align={"center"} borderBottom={"1px solid #eeeeee"} fontWeight={600} fontSize={{base:18, md:20, lg:20}}>Contact</Text>
                <Flex justify={"space-between"}>
                    <Box>
                    <Input focusBorderColor='black.400' placeholder="Please enter your name" fontSize={{base:16, md:20, lg:20}} border={"1px solid red"} onChange={(e)=>setName(e.target.value)}/>
                    </Box>
                    <Input
                    fontSize={{base:16, md:20, lg:20}}
                    width={"50%"}
                    type="number"
                    onChange={(e)=>setPhone(e.target.value)}
                    placeholder="Enter phone number"
                    />
                </Flex>
            </Box>
            <Box align={"left"} width={"100%"} pt={5} >
                <Text pb={2} mb={5} align={"center"} borderBottom={"1px solid #eeeeee"} fontWeight={600} fontSize={{base:18, md:20, lg:20}}>Address</Text>
                <Flex justify={"space-between"} >
                    <Input focusBorderColor='black.400' fontSize={{base:16, md:20, lg:20}} placeholder="Pincode" border={"1px solid red"} onChange={(e)=>setPincode(e.target.value)}/>
                    <Input focusBorderColor='black.400' fontSize={{base:16, md:20, lg:20}} placeholder="City" border={"1px solid red"} onChange={(e)=>setCity(e.target.value)}/>
                    <Input focusBorderColor='black.400' fontSize={{base:16, md:20, lg:20}} placeholder="State" border={"1px solid red"} onChange={(e)=>setState(e.target.value)}/>
                </Flex>
                <Box mb={5}>
                <Input fontSize={{base:16, md:20, lg:20}} width={{base:"100%", md:"50vw",lg:"30vw"}} focusBorderColor='black.400' placeholder="Address" border={"1px solid red"} mt={5} onChange={(e)=>setAddress(e.target.value)} />
                </Box>
                <Box>
                    <Text pb={2} borderBottom={"1px solid #eeeeee"} fontWeight={600} fontSize={{base:18, md:20, lg:20}}>Type of address</Text>
                    <Flex>
                        <Text fontSize={{base:16, md:20, lg:20}} border={"1px solid"} pl={3} pr={3} mt={2} mb={2} mr={5} borderRadius={"5px"} cursor={"pointer"} onClick={changeAddressButtonColor} style={{backgroundColor: isActive ? 'salmon' : '',color: isActive ? 'white' : '',}} name="btn" >Home</Text>
                        <Text fontSize={{base:16, md:20, lg:20}} border={"1px solid"} pl={3} pr={3} mt={2} mb={2} borderRadius={"5px"} cursor={"pointer"} >Office</Text>
                    </Flex>
                </Box>
                <Flex mt={10} justify={"space-between"} >
                    <Link to="/bag"><Button backgroundColor={"#ff9797"} fontSize={{base:16, md:20, lg:20}}>Back</Button></Link>
                    <Button backgroundColor={"#ff9797"} onClick={checkout} fontSize={{base:16, md:20, lg:20}}>Checkout</Button>
                </Flex>
            </Box>
        </Box>
    )
}