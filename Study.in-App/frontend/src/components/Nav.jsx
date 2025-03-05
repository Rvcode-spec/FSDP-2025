import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Nav() {
  const auth = localStorage.getItem('user')
  const user = auth && auth !== 'undefined' ? JSON.parse(auth) : null;
  const navigate = useNavigate();

  const logout = () => {
    navigate('/signup')
    localStorage.clear();
    console.log("Logout");

  }
  return (
    <div className="navbar">
      <div className="logoName">Study.in</div>
      <li><Link to='/'>Home</Link></li>
      {auth ?<ul>
        <li><Link to='/'>test series</Link></li>
        <li><Link to='/'>Ncert</Link></li>
        <li><Link to='/'>Gk & GS</Link></li>
        <li><Link to='/'>attempted-tests</Link></li>
        <li><Link to='/'>books</Link></li>
        <li><button onClick={logout}>Log Out ({user?.name})</button></li>
        
      </ul>
      :
      <ul className='nav-right'>
            <li><Link to="/signup">SignUp</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
}
    </div>
  );
}
