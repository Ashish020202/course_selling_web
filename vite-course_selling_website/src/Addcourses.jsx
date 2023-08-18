import React from 'react'
import { Typography } from '@mui/material'
import TextField from '@mui/material/TextField'
import { useState } from 'react'
import Box from '@mui/material/Box'
import axios from 'axios'
import { Button } from '@mui/material'

const Addcourses = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState(0)

  return (
    <div>
       <div style={{display:'flex' ,justifyContent:'center', paddingTop: 110,
                marginBottom: 10,}}>
      <Box varint={"outlined"} style={{width: 400, padding: 20, marginTop: 0, height: "100%",  boxShadow:'5px 5px 10px #000000'}}>
        <Typography>Add Courses</Typography>
        <TextField  fullWidth={true}
                    id="outlined-basic"
                    label="Title"
                    variant="outlined"
                    margin='normal'

                    onChange={(e)=>{
                       setTitle(e.target.value);
                    }}
                    />

        <TextField  fullWidth={true}
                    id="outlined-basic"
                    label="Description"
                    variant="outlined" 
                    margin='normal'

                    onChange={(e)=>{
                       setDescription(e.target.value);
                    }}
                    />

        <TextField  fullWidth={true}
                    id="outlined-basic"
                    label="Image Link"
                    variant="outlined"
                    margin='normal'
                    onChange={(e)=>{
                       setImage(e.target.value);
                    }} />  

        <TextField  fullWidth={true}
                    id="outlined-basic"
                    label="price"
                    variant="outlined"
                    margin='normal'
                    onChange={(e)=>{
                       setPrice(e.target.value);
                    }} />
         <Button
                    size={"large"}
                    variant="contained"
                    margin='normal'
                    color='warning'
                    onClick={async () => {
                        await axios.post("http://localhost:3000/admin/courses", {
                            title: title,
                                description: description,
                                imageLink: image,
                                published: true,
                                price
                        }, {
                            headers: {
                                "Authorization": "Bearer " + localStorage.getItem("token")
                            }
                        });
                        alert("Added course!");
                    }}
                > Add course</Button>            
      </Box>
    </div>
    </div>
    
  )
}

export default Addcourses
