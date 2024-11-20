import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Components/Button'; 
import { useState } from 'react';

function App() {
  return (
    <>
    <Button text={"Click me to move "}
     onClick={()=> alert("Alert Message when i hit the button !")
      
     }></Button>



    </>
  );
}

export default App;
