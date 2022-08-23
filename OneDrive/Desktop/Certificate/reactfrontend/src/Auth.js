import React, { useState } from 'react';
import axios from 'axios';
import {Box, Button, TextField, Typography} from '@mui/material';

function Auth() {
    const [isSignup, setIsSignup] = useState(false);
    const [inputs, setInputs] = useState({
        name: "",
        email:"",
        password:"",
    });

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name] : e.target.value
        }))
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(inputs);
        const res = await axios.post('http://localhost:8000/api/add-user',this.inputs);
        if(res.data.status === 200){
            console.log(res.data.message);
            this.setInputs({
                name: "",
                email:"",
                password:"",
            })
        }

    }
    const resetState = () => {
        setIsSignup(!isSignup);
        setInputs({name:"",email:"",password:""});
    }
    return (
    <div>
        <form onSubmit={handleSubmit}>
            <Box display="flex" flexDirection={"column"} maxWidth={400} alignItems="center" justifyContent={'center'} margin="auto" marginTop={5} padding={3} borderRadius={5} boxShadow={'5px 5px 10px #ccc'}
            sx={{ ":hover":{
                boxShadow:"10px 10px 20px #ccc",
            }, }}
            >
                <Typography  variant="h2" padding={3} textAlgin="center">{isSignup ? "Signup" : "Login"}</Typography>
                {isSignup && (<TextField onChange={handleChange} name="name" value={inputs.name} margin="normal" type={'name'} variant="outlined" placeholder='Name'/>)}
                <TextField onChange={handleChange} name="email" value={inputs.email} margin="normal" type={'email'} variant="outlined" placeholder='Email'/>
                <TextField onChange={handleChange} name="password" value={inputs.password} margin="normal" type={'password'} variant="outlined" placeholder='Password'/>
                <Button type="submit" sx={{ marginTop:3,borderRadius:3 }} variant='contained' color="warning">{isSignup ? "Signup" : "Login"}</Button>
                <Button onClick={resetState} sx={{ marginTop:3,borderRadius:3 }}>Change to {isSignup ? "Login" : "Signup"} </Button>
            </Box>
        </form>
    </div>
  )
}

export default Auth
