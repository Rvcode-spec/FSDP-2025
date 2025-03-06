import React, { useEffect } from 'react'
import loginImg from '../assets/login-bg.jpg'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] =useState("");
    const [password ,setPassword] =useState("");
    const navigate = useNavigate("");

    const userData = {name,email,password}
    console.log('sending the data', userData);
    

    useEffect(()=>{
        const auth = localStorage.getItem('user')
        if (auth) {
            navigate('/')
        }
      },)

    const collectDate= async(e)=>{
        e.preventDefault();
        console.log(name, email, password); // Check the Value 

        let result = await fetch('http://localhost:5000/SignUp/',{
            method: 'POST',
            body: JSON.stringify({name,email,password}), // // Convert object to JSON string
            headers:{
                'Content-Type': "application/json", // Correct header to indicate JSON content
            },
        });

        result = await result.json //Corrected `.json()` call
        console.log('Response from server:', result);
        
        // console.log(result); //login
        if (result) {
          localStorage.setItem('user', JSON.stringify(result)); // ✅ Store user data
          navigate('/'); // ✅ Redirect to home page
        }

    }
  return (
    <div className='login'>
    <div className='img-box'>
    <h1>Welcome Black to study.in</h1>
    <img src={loginImg} alt="Login Background" />
    </div>

    <div className='from-container'>
      <div className='close-icon'></div>
      <form>
      <h3>Sign Up</h3>
      <input type="text" placeholder="Enter your name" value={name}
      onChange={(e)=>{
        setName(e.target.value);
      }} />
      <input type="text" placeholder="Enter your email" value={email}
      onChange={(e)=>{
        setEmail(e.target.value)
      }}/>
      <input type="password" placeholder="Password" value={password}
      onChange={(e)=>{
        setPassword(e.target.value)
      }}/>
    
      <p><Link to='' style={{ color: 'rgb(133, 4, 4)',}}>Forget Password?</Link></p>
      <button type="submit" onClick={collectDate}>Log in</button>

      <p>
      Already have an account{' '}
        <Link to="/login">Login</Link>
      </p>
      </form>
    </div>
  </div>
  )
}
