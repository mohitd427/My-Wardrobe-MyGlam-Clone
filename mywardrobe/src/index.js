import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AppContextProvider } from './Context/AppContextProvider';
import { AuthContextProvider } from './Context/AuthContextProvider';
import {Provider} from "react-redux"
import {BrowserRouter} from "react-router-dom"
import { store } from './Redux/store';
import { ChakraProvider } from '@chakra-ui/react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <AppContextProvider>
      <AuthContextProvider>
      <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
 
      </AuthContextProvider>
    </AppContextProvider>
    </ChakraProvider>
    
);
