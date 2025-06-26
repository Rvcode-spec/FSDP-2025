import React from 'react'
import { useEffect } from 'react';


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
      <div className='text-2xl text-center '>
      <h1>hello</h1>
      
    </div>
    </>
  );
}

export default App;
