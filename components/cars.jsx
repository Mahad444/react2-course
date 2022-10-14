import { useState } from "react";
import React from 'react'

export default function Cars() {
    const [brand,setBrand] =useState("My Toyota");
    const [model,setModel] =useState("Sienta");
    const [year,setYear] =useState("2015");
    const [color,setColor] =useState("Red");
  return (
    <div>
        <h1>{brand}</h1>
        <p>It's a {color},{model} from {year}</p>

    </div>
  )
}
