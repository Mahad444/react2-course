import { useState } from "react";
import React from 'react'

export const Clickhandler = () => {
    const  [clickHandler,setMahad] =useState ("Mahad Is Awesome");
  return (
    <div><h1>{clickHandler}</h1>
        <button onClick={() =>  setMahad ("Call Me Back")}>click me</button>
    </div>
  )
}

