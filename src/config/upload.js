const fs = require("fs");
const multer = require("multer");
const path = require("path");

// Certifique-se de que a pasta de uploads existe
const uploadDir = "uploads/";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Pasta onde as imagens serão salvas
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + "-" + file.originalname;
    cb(null, uniqueName);
  },
});

const upload = multer({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // Limite de 5 MB
    fileFilter: (req, file, cb) => {
      const ext = path.extname(file.originalname).toLowerCase();
      if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
        return cb(new Error("Apenas imagens são permitidas"));
      }
      cb(null, true);
    },
  });
module.exports = upload;