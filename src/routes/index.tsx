import React from "react";
import {Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";

export default function RouterComponent() {

    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    );
}