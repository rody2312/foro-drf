import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/userActions";
import { LockClosedIcon, UserIcon, MailIcon } from "@heroicons/react/solid";
import { useNavigate } from "react-router";

import Loader from "./Loader";
import Messages from "./Messages";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const userRegister = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error, loading, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
    
    console.log(userRegister);
  }, [userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Password must match");
    } else {
      dispatch(register(username, email, password));
    }

  };

  return (
    <>
      {message && <Messages>{message}</Messages>}
      {error && <Messages>{error}</Messages>}
      {loading ? (
        <Loader />
      ) : (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Registrate
              </h2>
            </div>
            <form onSubmit={submitHandler} className="mt-8 space-y-6">
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label className="text-gray-700">
                    Username
                    <input
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      name="Username"
                      type="name"
                      required
                      autoComplete="Username"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900 sm:text-sm"
                      placeholder="Username"
                    />
                  </label>
                </div>
                <div>
                  <label className="text-gray-700">
                    Email
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900 sm:text-sm"
                      placeholder="Correo electrónico"
                    />
                  </label>
                </div>
                <div>
                  <label className="text-gray-700">
                    Contraseña
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      name="password"
                      type="password"
                      required
                      autoComplete="current-password"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900 sm:text-sm"
                      placeholder="Contraseña"
                    />
                  </label>
                </div>
                <div>
                  <label className="text-gray-700">
                    Confirmar Contraseña
                    <input
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      name="confirmPassword"
                      type="password"
                      required
                      autoComplete="current-password"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900 sm:text-sm"
                      placeholder="Confirmar contraseña"
                    />
                  </label>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Registrarse
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
