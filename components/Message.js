import { useState } from "react"

const Message = () => {
    const [message,setMessage] = useState('Welcome Visitor');

  return (
    <div>
        <h1>{message}
        <button onClick={()=>setMessage('Thank you For Subscribing')}>Subscribe</button>
        </h1>
    </div>
  )
}

export default Message