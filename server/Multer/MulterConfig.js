const multer = require("multer");
const MulterConfig = {};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.filename + "-" + Date.now());
  },
});

MulterConfig.upload = multer({ storage: storage });

module.exports = MulterConfig;
