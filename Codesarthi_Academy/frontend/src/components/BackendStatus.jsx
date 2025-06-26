import React, { useEffect, useState } from 'react';

const BackendStatus = () => {
  const [status, setStatus] = useState('Checking...');

  useEffect(() => {
    fetch('https://codesarthi-academy.onrender.com/')
      .then(res => {
        if (res.ok) {
          setStatus('✅ Backend Connected');
        } else {
          setStatus('❌ Backend Error');
        }
      })
      .catch(() => {
        setStatus('❌ Backend Not Reachable');
      });
  }, []);

  return (
    <div>
      <h2>Backend Status: {status}</h2>
    </div>
  );
};

export default BackendStatus;
