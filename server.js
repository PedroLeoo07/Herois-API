require("dotenv").config();
const express = require("express");
const cors = require("cors");
const editorasRoutes = require("./src/routes/editorasRoutes");
const heroisRoutes = require("./src/routes/heroisRoutes");
const reportRoutes = require("./src/routes/reportRoutes");
const path = require("path");
const apiKeyMiddleware = require("./src/config/apikey");

const app = express();
app.use(cors());
app.use(express.json());

app.use(apiKeyMiddleware); 

app.use("/api/editoras", editorasRoutes);
app.use("/api/herois", heroisRoutes);
app.use("/api", reportRoutes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});