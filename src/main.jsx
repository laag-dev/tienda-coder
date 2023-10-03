import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ProviderListCartContext } from "./context/ListCartContext";
import { ControllerShowCartProvider } from "./components/cart/ContextCart";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ControllerShowCartProvider>
  <ProviderListCartContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProviderListCartContext>
  </ControllerShowCartProvider>
);
