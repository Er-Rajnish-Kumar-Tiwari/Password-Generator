import React, {useState } from 'react';
import './passwordtanish.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';

export default function Tanishpassword() {

  let[length,setlength]=useState("");
  let[uppper,setupper]=useState(false);
  let[lower,setlower]=useState(false);
  let[symbols,setsymbols]=useState(false);
  let[digit,setdigit]=useState(false);
  let[display,setdisplay]=useState('');

  function getpassword(){
    let password='';
    let charset='';
    let UC="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let LC="abcdefghijklmnopqrstuvwxyz";
    let SC="!@#$%^&*()_-=+";
    let NC="1234567890";

    if(length===''){
      toast.warning("please fill the length of passeword!");
    }
    
    if(uppper || lower || symbols || digit){
      if(uppper) charset+=UC;
      if(lower) charset+=LC;
      if(symbols) charset+=SC;
      if(digit) charset+=NC;

      for(let i=0; i<length; i++){
        password+=charset.charAt(Math.floor(Math.random()*charset.length));
      }
      toast.success("password generated successfully!");
    }
    else{
      toast.error("please select any only check-box!");
    }

    setdisplay(password);
    setlength('');
    setdigit(false);
    setlower(false);
    setsymbols(false);
    setupper(false);
  }

  function cpypass(){
    navigator.clipboard.writeText(display);
    toast.success("password copied successfully!");
  }

  return (
    <div>
      <div className='cont'>

        <h1 style={{color:"maroon"}}>Tanish Learning Center </h1>
        <h3 style={{color:"brown"}}>Password Generator</h3>

        <input type='text' readOnly value={display}></input>
        <button className='copy-btn' onClick={cpypass}>Copy</button>

        <input type='number' max={32} min={8} value={length} onChange={(e)=>setlength(e.target.value.trim())}></input>

        UpperCase   <input type='checkbox' checked={uppper} onChange={()=>setupper(!uppper)}></input>
        LowerCase   <input type='checkbox' checked={lower} onChange={()=>setlower(!lower)}></input>
        Symbols   <input type='checkbox'checked={symbols} onChange={()=>setsymbols(!symbols)}></input>
        Numbers   <input type='checkbox' checked={digit} onChange={()=>setdigit(!digit)}></input>

        <button onClick={getpassword}>Generate Password</button>

      </div>
      <ToastContainer/>

    </div>
  )
}
