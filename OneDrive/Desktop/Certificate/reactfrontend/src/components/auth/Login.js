import React, { useState } from 'react';
import axios from 'axios';
import {Box, Button, Input, TextField, Typography} from '@mui/material';
import Navbar from '../Navbar';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [loginInput, setLogin] = useState({
        email:'',
        password:'',
        error_list:[],
    });

    const handleInput = (e) => {
        e.persist();
        setLogin({...loginInput,[e.target.name]: e.target.value});
    }

    const loginSubmit = (e) => {
        e.preventDefault();


        const data = {
            email: loginInput.email,
            password: loginInput.password,
        }

        axios.get('/sanctum/csrf-cookie').then(response => {
        axios.post(`/api/login`,data).then(res => {
            if(res.data.status === 200){
                localStorage.setItem('auth_token',res.data.token);
                localStorage.setItem('auth_name',res.data.username);
                swal("Success",res.data.message,"success");
                navigate('/');
            }
            else if(res.data.status === 401){
                swal("Warning",res.data.message,"warning");
            }
            else{
                setLogin({...loginInput,error_list: res.data.validation_errors});
            }
        });
    });
    }
   
    return (
    <div>
    <Navbar/>
        <form onSubmit={loginSubmit}>
            <Box display="flex" flexDirection={"column"} maxWidth={400} alignItems="center" justifyContent={'center'} margin="auto" marginTop={5} padding={3} borderRadius={5} boxShadow={'5px 5px 10px #ccc'}
            sx={{ ":hover":{
                boxShadow:"10px 10px 20px #ccc",
            }, }}
            >
                <Typography  variant="h2" padding={3} textAlgin="center">Login</Typography>
                <TextField onChange={handleInput} name="email" value={loginInput.email} margin="normal" type={'email'} variant="outlined" placeholder='Email'/>
                <span>{loginInput.error_list.email}</span>
                <TextField onChange={handleInput} name="password" value={loginInput.password} margin="normal" type={'password'} variant="outlined" placeholder='Password'/>
                <span>{loginInput.error_list.password}</span>
                <Button type="submit" sx={{ marginTop:3,borderRadius:3 }} variant='contained' color="warning">Login</Button>
            </Box>
        </form>
    </div>
  )
}

export default Login;
