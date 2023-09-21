import React, { useState } from "react"
import { Button, Card, IconButton ,TextField } from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";

export const Header = () => {   
    return (
        <div style={{display:'flex', justifyContent:'flex-end', gap:'2rem'}}>
            <Link to="/cart"><ShoppingCartIcon/></Link>
            <Link to="/account"><AccountCircleIcon/></Link>
        </div>
    )
}