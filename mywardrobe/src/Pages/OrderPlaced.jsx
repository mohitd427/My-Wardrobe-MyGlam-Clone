import { Alert, AlertDescription, AlertIcon, AlertTitle } from '@chakra-ui/react'
import React from 'react'

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
    </div>
  )
}

export default OrderPlaced
