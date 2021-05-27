import React from 'react';
import ReactDOM from 'react-dom';

import { ChakraProvider } from "@chakra-ui/react"
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

import {theme} from './styles/theme';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider resetCSS theme={theme}>
    <BrowserRouter>
        <Routes />
    </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
