import { useState,useEffect } from "react";

export const Effects = () => {
    const [count,setCount]=useState(0);
    useEffect( () =>{  
        setTimeout(() => {
            setCount((count)=> count + 1);
            
        }, 1000); 

    },[])
        return (
    <div>
<h2>i have rendered {count} times</h2>
    </div>
  )
}
