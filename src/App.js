import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home/index.js";
import NavBar from "./components/Navbar/index.js";
import Login from "./components/Login/index.js";
import TelaCadastro from "./components/TelaCadastro/index.js";
import GastronomyMap from "./pages/GastronomyMap/index.js";
import EventDetails from "./pages/EventDetails/index.js";
import Eventos from "./components/Eventos/index.js";
import "./App.css";

function App() {
    const location = useLocation();
    const showNavBar = location.pathname !== "/" && location.pathname !== "/cadastro";

    return (
        <div>
            {showNavBar && <NavBar />}
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cadastro" element={<TelaCadastro />} />
                <Route path="/home" element={<Home />} />
                <Route path="/gastronomy-map" element={<GastronomyMap />} />
                <Route path="/event/:id" element={<EventDetails />} />
                <Route path="/eventos" element={<Eventos />} />
            </Routes>
        </div>
    );
}

export default function AppWrapper() {
    return (
        <Router>
            <App />
        </Router>
    );
}
