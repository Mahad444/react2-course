import { useState } from "react";
import React from 'react'

export const Mahad = () => {
    const [color,setColor] = useState("Red");
  return (
    <div>
        <h1>My Favourite Color Is {color}!</h1>
        <button onClick={()=>setColor("Blue")}>Blue</button>

        <button onClick={()=>setColor("Green")}>Green</button>

        <button onClick={()=>setColor("Yellow")}>Yellow</button>
        
        <button onClick={()=>setColor("White")}>White</button>

    </div>
  )
}
