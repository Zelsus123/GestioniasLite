const { Sequelize, DataTypes } = require("sequelize");
const config = require("../../config/config");
const db = {};

db.connection = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.User = require("./models/User")(db.connection, DataTypes);
db.Cargos = require("./models/Cargos")(db.connection, DataTypes);
db.Productos = require("./models/Productos")(db.connection, DataTypes);
db.imagenes_productos = require("./models/imagenes_productos")(
  db.connection,
  DataTypes
);
db.Ventas = require("./models/ventas")(db.connection, DataTypes);
db.Clientes = require("./models/clientes")(db.connection, DataTypes);
db.Proveedores = require("./models/proveedores")(db.connection, DataTypes);
db.Compras = require("./models/compras")(db.connection, DataTypes);
db.General = require("./models/general")(db.connection, DataTypes);
db.Devoluciones = require("./models/devoluciones")(db.connection, DataTypes);
db.ProductosDevueltos = require("./models/productosdevueltos")(
  db.connection,
  DataTypes
);
db.Cajas = require("./models/cajas")(db.connection, DataTypes);
db.MetodosDePago = require("./models/metodosdepago")(db.connection, DataTypes);
db.Pagos = require("./models/pagos")(db.connection, DataTypes);
db.productoscomprados = require("./models/productoscomprados")(
  db.connection,
  DataTypes
);
db.productosvendidos = require("./models/productosvendidos")(
  db.connection,
  DataTypes
);
db.PagosNomina = require("./models/pagosnomina")(db.connection, DataTypes);
db.Ingresos = require("./models/ingresos")(db.connection, DataTypes);
db.Egresos = require("./models/egresos")(db.connection, DataTypes);
db.CierresParciales = require("./models/cierresparciales")(
  db.connection,
  DataTypes
);

//Asociacion de modelos
db.User.associate(db);
db.Cargos.associate(db);
db.Productos.associate(db);
db.imagenes_productos.associate(db);
db.Ventas.associate(db);
db.Clientes.associate(db);
db.Proveedores.associate(db);
db.Compras.associate(db);
db.productoscomprados.associate(db);
db.productosvendidos.associate(db);
db.Devoluciones.associate(db);
db.ProductosDevueltos.associate(db);
db.MetodosDePago.associate(db);
db.Pagos.associate(db);
db.PagosNomina.associate(db);
db.CierresParciales.associate(db);
module.exports = db;
