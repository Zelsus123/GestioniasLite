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

//Asociacion de modelos
db.User.associate(db);
db.Cargos.associate(db);
db.Productos.associate(db);
db.imagenes_productos.associate(db);
db.Ventas.associate(db);
db.Clientes.associate(db);
db.Proveedores.associate(db);
db.Compras.associate(db);

module.exports = db;
