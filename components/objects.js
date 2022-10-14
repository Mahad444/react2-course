import { useState } from "react";
import React from 'react'

export const Objects = () => {
    const[car,setCar] =useState ({
        brand:"Toyota",
        model:"Sinta",
        year:"2014",
        color:"Red"
    })
  return (
    <>
     <h1>My Car {car.brand}</h1>
     <p>
        It's a {car.color},{car.model} from {car.year}
     </p>
    </>
  )
}
