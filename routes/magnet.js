import Button  from 'react-bootstrap/Button';
import React from 'react'
import { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
const Magnet = () => {
  
    const [data,setData]=useState({
      email:"",
      password:""
    })

    const handleChange= (e)=>{
      const {name,value} = e.target;
      setData((prev)=>{
        return {...prev,[name]:value}
      })
    }

    const handleSubmit =()=>{
  fetch("http://localhost:4000/user",{
    method:'POST',
    headers:{"content-type":"application/json"},
    body:JSON.stringify(data)
  }).then(Response=>{
    Response.json()
  })
  .then(result=>alert(JSON.stringify(result.error.message, null,2)))
  }

    return(
  <>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" onChange={handleChange}/>
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" onChange={handleChange}/>
      </FloatingLabel>
      <Button variant="primary" onSubmit={handleSubmit}>Primary</Button>{' '}
    </>
        
  )
}

export default Magnet