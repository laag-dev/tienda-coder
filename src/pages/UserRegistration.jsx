import React, { useState } from "react";
import Modal from "react-modal";
import { MdClose } from "react-icons/md";

export const UserRegistration = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    authenticate(username, password)
      .then((success) => {
        if (success) {
          onClose(); // Cierra el modal cuando el inicio de sesión es exitoso
        } else {
          setError("Credenciales incorrectas. Por favor, inténtelo de nuevo.");
        }
      })
      .catch((err) => {
        setError("Error en la autenticación. Por favor, inténtelo de nuevo.");
      });
  };

  const authenticate = (username, password) => {
    return new Promise((resolve, reject) => {
      // Simulamos una solicitud a un servidor que verifica las credenciales
      setTimeout(() => {
        if (username === "usuario" && password === "contraseña") {
          resolve(true); // Autenticación exitosa
        } else {
          resolve(false); // Autenticación fallida
        }
      }, 1000); // Simulamos una demora de 1 segundo para la solicitud
    });
  };

  const customStyles = {
    content: {
      top: "50%", // Centra verticalmente
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)", // Centra horizontalmente y ajusta verticalmente
      maxWidth: "400px", // Ajusta el ancho máximo del modal
      width: "100%", // Establece el ancho al 100%
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Login Modal"
      style={customStyles}
    >
      <div className="flex justify-end">
        <button
          className="text-white text-xl hover:text-gray-300 focus:outline-none"
          onClick={onClose}
        >
          <MdClose className="rounded-full bg-[#404040] hover:shadow mb-2 text-md" />
        </button>
      </div>
      <h2 className="text-2xl border-b-2 md:text-3xl font-bold text-black mb-2 p-2 text-center">
        Regístrate
      </h2>
      <form className="space-y-6 max-w-md mx-auto p-6 bg-[#404040] rounded-lg shadow-lg">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-semibold text-white"
          >
            Nombre:
          </label>
          <input
            type="name"
            name="name"
            id="name"
            className="form-input w-full px-3 py-2 text-black rounded-md border focus:ring bg-white "
            placeholder="nombre"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-semibold text-white"
          >
            Apellido:
          </label>
          <input
            type="lastname"
            name="lastname"
            id="lastname"
            className="form-input w-full px-3 py-2 text-black rounded-md border focus:ring bg-white "
            placeholder="apellido"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-semibold text-white"
          >
            Contraseña
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className="form-input w-full px-3 py-2 text-black rounded-md border focus:ring bg-white"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-semibold text-white"
          >
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-input w-full px-3 py-2 text-black rounded-md border focus:ring bg-white "
            placeholder="name@company.com"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#AF8970] text-black hover:bg-black hover:text-white font-semibold py-2 rounded-md transition duration-300 "
          onClick={handleLogin}
        >
          Crear cuenta
        </button>
        <button
          type="submit"
          className="w-full bg-[#AF8970] text-black hover:bg-black hover:text-white font-semibold py-2 rounded-md transition duration-300 "
          onClick={handleLogin}
        >
          Crear cuenta con Google
        </button>
      </form>
    </Modal>
  );
};
