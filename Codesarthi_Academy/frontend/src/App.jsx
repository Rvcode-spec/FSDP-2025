import React from 'react'
import { useEffect } from 'react';
import LoginForm from './components/Home';
import BackendStatus from './components/BackendStatus';


function App() {
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/test`)
      .then(res => res.text())
      .then(data => {
        console.log("Response from backend:", data);
      })
      .catch(err => {
        console.error("Error fetching backend:", err);
      });
  }, []);

  return (
    <>
      <LoginForm/>
      <BackendStatus/>
    </>
  );
}

export default App;
