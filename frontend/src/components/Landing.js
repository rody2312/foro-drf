import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="landing flex flex-col justify-center items-center h-screen text-center p-5">
      <h1 className="title text-5xl font-bold mb-5">Bienvenidos al Foro</h1>
      <p className="description text-xl mb-5">
        Aquí encontrarás pensamientos e ideas sobre una variedad de temas interesantes.
      </p>
      <div className="flex space-x-4">
        <Link to="/signin" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Iniciar sesión
        </Link>
        <Link to="/signup" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Registrarse
        </Link>
      </div>
    </div>
  );
};

export default Landing;
