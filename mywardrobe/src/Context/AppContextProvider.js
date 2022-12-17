import { useDisclosure } from '@chakra-ui/react';
import React from 'react'
import { createContext } from 'react'

export const AppContext = createContext();


const AppContextProvider = ({children}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <AppContext.Provider value={{isOpen, onOpen, onClose}}>
        {children}
    </AppContext.Provider>
  )
}

export {AppContextProvider}