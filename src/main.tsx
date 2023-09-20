import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom';

import './index.css'

const root: HTMLElement | null = document.getElementById('root');

if(root){
    ReactDOM.createRoot(root).render(
        <BrowserRouter>
            <App></App>
        </BrowserRouter>
    );
}