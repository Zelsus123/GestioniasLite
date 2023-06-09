const express = require("express");
const UserRoutes = require("./users.routes");
const CargosRoutes = require("./cargos.routes");
const ProductosRoutes = require("./productos.routes");
const ProveedoresRoutes = require("./proveedores.routes");
const ComprasRoutes = require("./compras.routes");
const ClientesRoutes = require("./clientes.routes");
const VentasRoutes = require("./ventas.routes");
const GeneralRoutes = require("./general.routes");
const DevolucionesRoutes = require("./devoluciones.routes");
const CajasRoutes = require("./cajas.routes");
const CierresRoutes = require("./cierres.routes");
const IngresosRoutes = require("./ingresos.routes");
const EgresosRoutes = require("./egresos.routes");
const RouterPrincipal = express.Router();

RouterPrincipal.get("/", (req, res) => {
  res.json("Hola Mundo");
});

RouterPrincipal.use("/users", UserRoutes);
RouterPrincipal.use("/cargos", CargosRoutes);
RouterPrincipal.use("/productos", ProductosRoutes);
RouterPrincipal.use("/proveedores", ProveedoresRoutes);
RouterPrincipal.use("/compras", ComprasRoutes);
RouterPrincipal.use("/clientes", ClientesRoutes);
RouterPrincipal.use("/ventas", VentasRoutes);
RouterPrincipal.use("/general", GeneralRoutes);
RouterPrincipal.use("/devoluciones", DevolucionesRoutes);
RouterPrincipal.use("/cajas", CajasRoutes);
RouterPrincipal.use("/cierres", CierresRoutes);
RouterPrincipal.use("/ingresos", IngresosRoutes);
RouterPrincipal.use("/egresos", EgresosRoutes);

module.exports = RouterPrincipal;
