// Header.js
import { Navbar } from "./Navbar";
import { useState } from 'react';
import { UserLogin } from "../../pages/UserLogin";
import { UserRegistration } from "../../pages/UserRegistration";

export const Header = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const openRegistrationModal = () => {
    setIsRegistrationModalOpen(true);
  };

  const closeRegistrationModal = () => {
    setIsRegistrationModalOpen(false);
  };

  return (
    <div>
      <Navbar openLoginModal={openLoginModal} openRegistrationModal={openRegistrationModal} />
      <UserLogin isOpenL={isLoginModalOpen} onCloseL={closeLoginModal} />
      <UserRegistration isOpen={isRegistrationModalOpen} onClose={closeRegistrationModal} />
    </div>
  );
};
