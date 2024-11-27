import React from "react";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import Header from "./components/Headers/Header";

export default function Layout() {
    return (
        <>
        <Header />
        <Outlet />
        <Footer />
        </>
    )
}