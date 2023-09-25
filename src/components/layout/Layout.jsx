import { Header } from "../header/Header";
import { Routers } from "../../routers/Routers";
import { Services } from "../../Service/Services";
import { Footer } from "../footer/Footer";

export const Layout = () => {
  return (
    <div>
      <Header />
       <div>
        <Routers />
      </div> 
      <div>
      <Services/>
      </div>
      <Footer />
    </div>
  );
};
