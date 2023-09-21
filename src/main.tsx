import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom';

import './index.css'
import { Header } from './pages/Header/index.tsx';
import { Footer } from './pages/Footer/index.tsx';

const root: HTMLElement | null = document.getElementById('root');

if(root){
    ReactDOM.createRoot(root).render(
        <BrowserRouter>
            <Header/>
            <App></App>
            <Footer/>
        </BrowserRouter>
    );
}