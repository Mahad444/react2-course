
import {Button, Form, Stack} from 'react-bootstrap';
 import { useState } from 'react';




export const  Signup = () => {
//   const [data,setData]=useState({
//     customerNumber:"",
//     customerName:"",
//     password:""
//   })
//   const handleChange= (e)=>{
//     const {customerName,value} = e.target;
//     setData((prev)=>{
//       return {...prev,[customerName]:value}
//     })
//   }
//  const handleSubmit =(e)=>{
//   fetch("http://localhost:7500/customerrs",{
//     method:'POST',
//     headers:{"content-type":"application/json"},
//     body:JSON.stringify(data)
//   }).then(Response=>{
//     Response.json()
//   })
//   .then(result=>alert(JSON.stringify(result.error.message,null,2)))
//  }


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
// const handleSubmit =(e)=>{
// fetch("http://localhost:7500/customerrs",{
//   method:'POST',
//   headers:{"content-type":"application/json"},
//   body:JSON.stringify(data)
// }).then(Response=>{
//   Response.json()
// })
// .then(result=>alert(JSON.stringify(result.error.message,null,2)))
// }
const handleSubmit =(e)=>{
  fetch("http://localhost:4000/user",{
    method:'POST',
    headers:{"content-type":"application/json"},
    body:JSON.stringify(data)
  }).then(Response=>{
    Response.json()
  })
  .then(result=>alert(JSON.stringify(result.error.message, null,2)))
  }


  return (
    <Stack>
    <Form>
        <Form.Group>
          <Form.Label>Enter Text here</Form.Label>
          <Form.Control type='email' placeholder='Enter Email' onChange={handleChange}/>
          <Form.Text className='text-muted'>We'll never share your email with anyone</Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter Password</Form.Label>
          <Form.Control type='password' placeholder='Enter Password' onChange={handleChange}/>
        </Form.Group>
        <Button variant='primary' onClick={handleSubmit} type="submit">Submit</Button>
        </Form>
    </Stack>
  )
}

// export default Signup;