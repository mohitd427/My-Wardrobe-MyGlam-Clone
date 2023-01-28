import { Alert, AlertDescription, AlertIcon, AlertTitle, Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const OrderPlaced = () => {
  return (
    <div>
        <Alert
            status='success'
            variant='subtle'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            textAlign='center'
            height='200px'
            >
            <AlertIcon boxSize='40px' mr={0} />
            <AlertTitle mt={4} mb={1} fontSize='lg'>
                Order Placed!
            </AlertTitle>
            <AlertDescription maxWidth='sm'>
                Thanks for placing your order. Your order will be placed soon.
            </AlertDescription>
        </Alert>
        <Link to={"/"}>
          <Button backgroundColor={"black"} color={"white"} width={{base:"90%", md:"60%", lg:"50%"}} display={"block"} m={"auto"} mt={5} align={'center'}>Go To Home Section</Button>
        </Link>
    </div>
  )
}

export default OrderPlaced;
