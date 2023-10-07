import React, { useState } from "react";
import Modal from "react-modal";
import { MdClose } from "react-icons/md";
import { useAuth } from "../context/AuthContext";

export const UserRegistration = ({ isOpen, onClose }) => {
  const auth = useAuth();
  const [emailRegister, setEmailRegister] = useState(" ");
  const [passwordRegister, setPasswordRegister] = useState(" ");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      auth.register(emailRegister, passwordRegister);
      alert("¡Registro exitoso!")
    } catch (error) {
      alert("Ingrese un email o contraseña valido")
      // Muestra un mensaje de error al usuario
    }
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
            htmlFor="email"
            className="block mb-2 text-sm font-semibold text-white"
          >
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setEmailRegister(e.target.value)}
            className="form-input w-full px-3 py-2 text-black rounded-md border focus:ring bg-white "
            placeholder="name@company.com"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-semibold text-white"
          >
            Contraseña:
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            onChange={(e) => setPasswordRegister(e.target.value)}
            className="form-input w-full px-3 py-2 text-black rounded-md border focus:ring bg-white"
          />
        </div>
        <div>
          <h4 className="text-[#AF8970]">
          Mínimo 6 caracteres con al menos una mayúscula
          </h4>
        </div>
        <button
          type="submit"
          className="w-full bg-[#AF8970] text-black hover:bg-black hover:text-white font-semibold py-2 rounded-md transition duration-300 "
          onClick={handleRegister}
        >
          Crear cuenta
        </button>
      </form>
    </Modal>
  );
};
