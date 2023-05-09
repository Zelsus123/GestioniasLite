import React from "react";
import { Routes, Route } from "react-router-dom";
import { Compras, Home, Productos, Ventas } from "../pages";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ventas" element={<Ventas />} />
      <Route path="/compras" element={<Compras />} />
      <Route path="/productos" element={<Productos />} />
    </Routes>
  );
};
