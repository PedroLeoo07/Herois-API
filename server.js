require("dotenv").config();
const express = require("express");
const cors = require("cors");
const editorRoutes = require("./src/routes/editorsRoutes");
const heroiRoutes = require("./src/routes/heroisRoutes");
const reportRoutes = require("./src/routes/reportRoutes")
const setupSwagger = require("./src/config/swagger");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());


app.use("/api", heroiRoutes);
app.use("/api", editorRoutes);
app.use("/api", reportRoutes);
setupSwagger(app);
app.use("uploads", express.static(path.join(__dirname, "uploads")));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});