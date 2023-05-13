import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Clientes,
  Compras,
  Home,
  Productos,
  Proveedores,
  Ventas,
} from "../pages";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ventas" element={<Ventas />} />
      <Route path="/compras" element={<Compras />} />
      <Route path="/productos" element={<Productos />} />
      <Route path="/proveedores" element={<Proveedores />} />
      <Route path="/clientes" element={<Clientes />} />
    </Routes>
  );
};
