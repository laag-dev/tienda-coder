import { Header } from "../header/Header";
import { Routers } from "../../routers/Routers";
import { Footer } from "../footer/Footer";

export const Layout = () => {
  return (
    <div>
      <Header />
       <div>
        <Routers />
      </div> 
      <Footer />
    </div>
  );
};
