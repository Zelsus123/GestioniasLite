const multer = require("multer");
const { v4: uuidv4 } = require("uuid");

const MulterProductos = {};

MulterProductos.storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "Public/Uploads/Productos");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + uuidv4();
    const fileExtension = file.originalname.split(".").pop();
    const fileName = uniqueSuffix + "." + fileExtension;
    cb(null, fileName);
  },
});

module.exports = MulterProductos;
