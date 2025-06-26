import React, { useState } from 'react';
import SignUp from '../_Auth/SignUp';
import LoginPage from '../_Auth/Login';

const HomePage = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div>
      {isLogin ? (
        <LoginPage onSwitch={() => setIsLogin(false)} />
      ) : (
        <SignUp onSwitch={() => setIsLogin(true)} />
      )}
    </div>
  );
};

export default HomePage;
