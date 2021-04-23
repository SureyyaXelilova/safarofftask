import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
  return (
    <nav className="mb-40">
        <div className="nav-wrapper plr-30">
          <Link to='/' className="brand-logo">React + Typescript</Link>
          <ul className="right hide-on-med-and-down">
            <li><Link to='/'>Posts</Link></li>
            <li><Link to={'/errors'}>Errors</Link></li>
          </ul>
        </div>
    </nav>
  );
}


