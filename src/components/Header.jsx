import React from "react";

import { Banner } from "./Banner";
import { Navbar } from "./navComponents/Navbar";

export const Header = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
    </div>
  );
};


