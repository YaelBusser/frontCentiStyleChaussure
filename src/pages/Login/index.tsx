import React, { useState } from "react"
import { Button, Card, TextField } from "@mui/material"

const Login = () => {
    const [username, setUsername] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    
    return (
        <Card style={{display:'flex', flexDirection:'column', padding:'2rem'}}>
            <h1>Connexion</h1>
            <TextField label='Nom de compte' onChange={(e)=>{setUsername(e.target.value)}}/>
            <TextField label='Mot de passe' onChange={(e)=>{setEmail(e.target.value)}} type="password"/>
            <Button>Se connecter</Button>
        </Card>
    )
}

export default Login