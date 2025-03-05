import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="navbar">
      <div className="logoName">Study.in</div>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/'>test series</Link></li>
        <li><Link to='/'>Ncert</Link></li>
        <li><Link to='/'>Gk & GS</Link></li>
        <li><Link to='/'>attempted-tests</Link></li>
        <li><Link to='/'>books</Link></li>
        
      </ul>

      <ul className='nav-right'>
            <li><Link to="/signup">SignUp</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        
    </div>
  );
}
