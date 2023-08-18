import React, { useState } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import { json } from 'react-router-dom'
import {useNavigate} from 'react-router-dom';
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate()
  const [uname,setUname] = useState("");
  const [pass,setPassword] = useState("")

  return ( <div> 
      {/* <div style={{display:'flex',justifyContent:'center',paddingTop:110,marginBottom:10}}>
      </div> */}
    <div style={{display:'flex',justifyContent:'center', paddingTop:110,marginBottom:10}}>
    <Box variant={"outlined"} style={{width: 400, padding: 20}} boxShadow={'5px 5px 10px #000000'}>
    <Typography variant='h5'textAlign="center" padding={3}>
        welcome to coursera
      </Typography>
    <TextField
       onChange={(e)=>{
        setUname(e.target.value);
       }}
       fullWidth={true}
      //  id="username" 
       label="Email"
       variant="outlined" 
      //  margin='normal'
       />
      
      <TextField
      onChange={(e)=>{
        setPassword(e.target.value);
       }}
       fullWidth={true}
      //  id="password" 
       type='password'
       label="Password"
       variant="outlined"
       margin='normal' />

      <Button variant="contained" color='warning' sx= {{marginTop:2}} size={"large"}
       onClick={async()=>{
        // navigate('../login')
        // let username = document.getElementById('username').value 
        // let password = document.getElementById('password').value 
        // fetch('http://localhost:3000/admin/signup',{
        //   method: "POST",
        //   body:JSON.stringify({
        //     username:uname ,
        //     password: pass
        //   }),
        //   headers:{
        //     "Content-type": "application/json"
        //   }
        // }).then((res)=>{
        //   res.json().then((data)=>{
        //     localStorage.setItem("token", data.token);
        //   }) 
        // })
        
        const resp = await axios.post('http://localhost:3000/admin/signup',{
          username:uname ,
          password: pass
        })
        let data = resp.data;
        localStorage.setItem("token", data.token);
        window.location = '/';
         
       }}>SignUp</Button>
    </Box>
    </div>
    </div>
  )
}

export default Signup
