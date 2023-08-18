import React from 'react'
import { Button } from '@mui/material'
import {useNavigate} from 'react-router-dom';

const Appbar = () => {
  const navigate = useNavigate()
   return (
    <div style={{display:'flex',justifyContent:'space-between'}}>
     
      <div>
        COURSERA
      </div>
      <div style={{display:'flex'}}>
        <div style={{marginRight:'10px'}}>
        <Button variant='contained' onClick={()=>{
          navigate('./signup')
        }}>SignUp</Button></div>
        <div><Button variant='contained' onClick={()=>{
          navigate('./login')}}>Login</Button></div>
      </div>
  
    </div>
  ) 
}

export default Appbar


