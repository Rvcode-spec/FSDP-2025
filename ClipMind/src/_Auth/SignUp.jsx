import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function SignUp({onSwitch}) {

  const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

    const navigate = useNavigate();


  const collectData = async () => {
    console.log("Click")
    try {
      const response = await fetch("http://localhost:9000/signup", {
        method: 'POST',
        headers: {
          'Content-Type': "application/json",
        },
        body: JSON.stringify({ email, password })
      });

      const result = await response.json();
      if (result && (result.id || result._id)) {
        localStorage.setItem("user", JSON.stringify(result));
        localStorage.setItem("token", result.token || "");
        navigate("/");
      } else {
        alert("Registration failed. Please try again.");
      }
      
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };




  
  return (
    <div className='flex w-full mx-auto h-screen items-center justify-center'>
      <div className='left w-1/2 flex'>
        <img src="\src\assets\web-img.svg" className='w-200 ' alt="img" />
      </div>

  <div className='right my-8 px-2 py-2 p-8 flex flex-col items-center justify-center w-1/3 bg-white shadow-2xl shadow-blue-600  rounded-xl  py-5'>

        <h1 className='text-2xl font-bold  mb-4  underline-offset-4  text-orange-400'>Sign-Up</h1>
        
        <input type="text" 
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
         className=' w-80  lowercase text-ms  py-3 px-2 h-12 my-2 border-1 border border-gray-300 outline-blue-400 rounded-lg' placeholder='Enter the Email' />

        <input type='password' 
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        className=' w-80 text-ms lowercase py-3 px-2 h-12 my-2 border-1 border border-gray-300  outline-blue-400 rounded-lg' placeholder='Enter the Password' />

        <button className=' my-2
          border-1 border-gray-400 outline-violet-700
          text-purple-600 hover:border-transparent hover:bg-purple-600 
          hover:text-white
         cursor-pointer py-2 px-3 w-40 rounded-2xl font-bold ' 
         onClick={collectData}>Sign-Up
    </button>
              <span class="text-center cursor-pointer  text-gray-700 hover:underline py-2">Forgotten password?</span>
              <div className='w-full items-center justify-center text-center flex hover:underline '>
          
       <p className='mt-4 text-sm text-gray-600'>
          Already have an account?
          <span onClick={onSwitch} className='text-black font-bold ml-1 cursor-pointer hover:underline'>
            Login
          </span>
        </p>



              </div>
              
              
      </div>
    </div>
  )
}
