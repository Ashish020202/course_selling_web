import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import Box from '@mui/material/Box';
import {Card, Typography} from "@mui/material";
import { useState } from 'react';
import axios from 'axios';
// import { Navigate } from 'react-router-dom';


function Signin() {
    // const navigate = useNavigate()
    const [uname,setUname] = useState("");
    const [pass,setPassword] = useState("")
    return <div>
            {/* <div style={{
                paddingTop: 110,
                marginBottom: 10,
                display: "flex",
                justifyContent: "center"
            }}>
            </div> */}
        <div style={{display: "flex", justifyContent: "center" ,paddingTop: 110,
                marginBottom: 10, }}>
            <Box variant={"outlined"} style={{width: 400, padding: 20}} boxShadow={'5px 5px 10px #000000'}>
            <Typography variant={"h6"} textAlign="center" padding={3}>
                Welcome back Sign in below
                </Typography>
                <TextField 
                    onChange={(e)=>{
                        setUname(e.target.value);
                    }}
                    fullWidth={true}
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                />
               
                <TextField
                  onChange={(e)=>{
                    setPassword(e.target.value);
                    }}
                    fullWidth={true}
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    type={"password"}
                    margin='normal'
                />
                

                <Button size={"large"} variant="contained" color='warning' sx= {{marginTop:2}}
                onClick={async()=>{
                    const response = await axios.post('http://localhost:3000/admin/login',{
                        username:uname ,
                        password: pass
                    }, {
                        headers: {
                                "Content-type": "application/json"
                            }
                    });

                    const data = response.data;
                    localStorage.setItem("token", data.token);
                    window.location = "/"
                }}
                 > Signin</Button>
            </Box>
        </div>
    </div>
}

export default Signin;