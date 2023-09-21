import React from "react";
import {Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import { Cart } from "../pages/Cart";
import { Account } from "../pages/Account";
import { CGV } from "../pages/CGV";

export default function RouterComponent() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/account" element={<Account/>}/>
            <Route path="/cgv" element={<CGV/>}/>
        </Routes>
    );
}