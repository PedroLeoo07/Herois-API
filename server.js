require("dotenv").config();
const express = require("express");
const cors = require("cors");
const jogadorRoutes = require("./src/routes/jogadorRoutes");
const timeRoutes = require("./src/routes/timeRoutes");
const reportRoutes = require("./src/routes/reportRoutes");
const path = require("path");
const apiKeyMiddleware = require("./src/config/apikey");

const app = express();
app.use(cors());
app.use(express.json());

app.use(apiKeyMiddleware); 

app.use("/jogador", jogadorRoutes);
app.use("/time", timeRoutes);
app.use("/api", reportRoutes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});