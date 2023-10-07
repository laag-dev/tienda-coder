import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ProviderListCartContext } from "./context/ListCartContext";
import { AuthProvider } from "../src/context/AuthContext";
import Modal from 'react-modal';

Modal.setAppElement('#root');
ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
  <ProviderListCartContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProviderListCartContext>
  </AuthProvider>
);
