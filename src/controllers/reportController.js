const { format } = require("@fast-csv/format");
const PDFDocument = require("pdfkit");
const heroiModel = require("../models/heroiModel.js");

const exportHeroisCSV = async (req, res) => {
    try {
        const herois = await heroiModel.getHerois();

        res.setHeader("Content-Disposition", "attachment; filename=herois.csv");
        res.setHeader("Content-Type", "text/csv");

        const csvStream = format({ headers: true });
        csvStream.pipe(res);

        herois.forEach((heroi) => {
            csvStream.write({
                Id: heroi.id,
                Name: heroi.name,
                Poder: heroi.poder,
            });
        });

        csvStream.end();
    } catch (error) {
        res.status(500).json({ message: "Erro ao gerar o CSV" });
    }
};

const exportHeroisPDF = async (req, res) => {
    try {
        const Herois = await heroiModel.getHerois(); 

        res.setHeader("Content-Type", "application/pdf");
        res.setHeader("Content-Disposition", "inline; filename=herois.pdf");

        const doc = new PDFDocument();
        doc.pipe(res);

        // Título
        doc.fontSize(30).text("Relatório de Heróis", { align: "center" });
        doc.moveDown();

        // Cabeçalho
        doc.fontSize(20).text("Id | Name | Poder", { underline: true });
        doc.moveDown(0.5);

        // Adicionar dados dos heróis
        Herois.forEach((heroi) => {
            doc.text(
                `${heroi.id} | ${heroi.name} | ${heroi.poder}`
            );
        });

        doc.end();
    } catch (error) {
        res.status(500).json({ message: "Erro ao gerar PDF!", error: error.message });
    }
};

module.exports = { exportHeroisCSV, exportHeroisPDF };