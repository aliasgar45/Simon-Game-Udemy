import React, { useState } from 'react';
import axios from 'axios';
import {Box, Button, TextField, Typography} from '@mui/material';
import Navbar from '../Navbar';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

function Register() {
    
    const navigate = useNavigate();
    const [registerInput, setRegister] = useState({
        name:'',
        email:'',
        password:'',
        error_list:[],
    });


    const handleInput = (e) => {
        e.persist();
        setRegister({...registerInput,[e.target.name]: e.target.value});
    }

    const registerSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: registerInput.name,
            email: registerInput.email,
            password: registerInput.password,
        }

        axios.get('/sanctum/csrf-cookie').then(response => {
        axios.post(`/api/register`,data).then(res => {
            if(res.data.status === 200){
                localStorage.setItem('auth_token',res.data.token);
                localStorage.setItem('auth_name',res.data.username);
                swal("Success",res.data.message,"success");
                navigate('/');
            }
            else{
                setRegister({...registerInput,error_list: res.data.validation_errors});
            }
        });
    });
    }

    return (
    <div>
    <Navbar/>
        <form onSubmit={registerSubmit}>
            <Box display="flex" flexDirection={"column"} maxWidth={400} alignItems="center" justifyContent={'center'} margin="auto" marginTop={5} padding={3} borderRadius={5} boxShadow={'5px 5px 10px #ccc'}
            sx={{ ":hover":{
                boxShadow:"10px 10px 20px #ccc",
            }, }}
            >
                <Typography  variant="h2" padding={3} textAlgin="center">Signup</Typography>
                <TextField onChange={handleInput} name="name" value={registerInput.name} margin="normal" type={'name'} variant="outlined" placeholder='Name'/>
                <span>{registerInput.error_list.name}</span>
                <TextField onChange={handleInput} name="email" value={registerInput.email} margin="normal" type={'email'} variant="outlined" placeholder='Email'/>
                <span>{registerInput.error_list.email}</span>
                <TextField onChange={handleInput} name="password" value={registerInput.password} margin="normal" type={'password'} variant="outlined" placeholder='Password'/>
                <span>{registerInput.error_list.password}</span>
                <Button type="submit" sx={{ marginTop:3,borderRadius:3 }} variant='contained' color="warning">Signup</Button>
                {/* <Button onClick={resetState} sx={{ marginTop:3,borderRadius:3 }}>Change to {isSignup ? "Login" : "Signup"} </Button> */}
            </Box>
        </form>
    </div>
  )
}

export default Register;
