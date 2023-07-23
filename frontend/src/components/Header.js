import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="p-5 bg-blue-500">
      <nav className="flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          Forum
        </Link>
        <div className="space-x-4">
          <Link to="/forum" className="text-white">
            Foro
          </Link>
          <Link to="/signin" className="text-white">
            Iniciar sesión
          </Link>
          <Link to="/signup" className="text-white">
            Registrarse
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
