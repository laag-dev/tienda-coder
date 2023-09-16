import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import { Navbar } from "./components/navComponents/Navbar";
import { Footer } from "./components/home/Footer";
import { Home } from "./pages/Home";
// import {Cart} from "./pages/Cart";
import { productsData } from "./api/Api";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="font-bodyFont">
      <Router>
        {/* Define your header/navigation here */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {/* Add links for Cart and Login here */}
          </ul>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <Layout />
            }
          >
            <Route
              index
              element={
                <Home />
              }
               loader={() => import("./api/Api").then((module) => module.productsData())}
            />
            {/* Add routes for Cart and Login here */}
          </Route>
        </Routes>
      </Router>
    </div>
  );
}


export default App;