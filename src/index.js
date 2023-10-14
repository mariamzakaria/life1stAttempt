import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from 'styled-components';



const root = ReactDOM.createRoot(document.getElementById('root'));
const theme = {};
root.render(
   // <ThemeProvider dir="rtl" theme={theme}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
   // </ThemeProvider>
);


