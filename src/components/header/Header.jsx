import { Navbar } from "./Navbar";
import { useState } from 'react';
import { UserLogin } from "../../pages/UserLogin";

export const Header = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };
  return (
    <div>
    <Navbar openLoginModal={openLoginModal} />
    <UserLogin isOpen={isLoginModalOpen} onClose={closeLoginModal} />
  </div>
  );
};
