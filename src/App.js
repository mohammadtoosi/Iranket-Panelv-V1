import React from "react";
import { useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layouts/Layout";

import Home from "./pages/Home";
import Products from "./pages/Products";
import SignUp from "./pages/Authentication/SignUp";
import SignIn from "./pages/Authentication/SignIn";
import SignInWithPassword from "./pages/Authentication/SignInWithPassword";
import ConfirmPhoneNumber from "./pages/Authentication/ConfirmPhoneNumber";
import ResetPassword from "./pages/Authentication/ResetPassword";
import NewPassword from "./pages/Authentication/NewPassword";

import "./App.css";

function App() {
    const location = useLocation();

    return (
        <>
            {/* {location.pathname === "/new-password" ? "" : <Layout />} */}
            <Routes>
                <Route index element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signin" element={<SignIn />} />
                <Route
                    path="/login-with-password"
                    element={<SignInWithPassword />}
                />
                <Route path="/reset-password" element={<ResetPassword />} />
                <Route path="/new-password" element={<NewPassword />} />
            </Routes>
        </>
    );
}

export default App;
