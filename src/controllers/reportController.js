const { format } = require("@fast-csv/format");
const PDFDocument = require("pdfkit");
const jogadorModel = require("./../models/jogadorModel");

const exportJogadorCSV = async (req, res) => {
    try {
        const jogadores = await jogadorModel.getJogadores();

        res.setHeader("Content-Disposition", "attachment; filename=jogadores.csv");
        res.setHeader("Content-Type", "text/csv");

        const csvStream = format({ headers: true });
        csvStream.pipe(res);

        jogadores.forEach((jogador) => {
            csvStream.write({
                Id: jogador.id,
                Nome: jogador.name,
                Idade: jogador.idade,
                Gols: jogador.gols,
                Time: jogador.time_id
            });
        });

        csvStream.end();
    } catch (error) {
        res.status(500).json({ message: "Erro ao gerar o CSV" });
    }
};

const exportJogadorPDF = async (req, res) => {
    try {
        const jogadores = await jogadorModel.getJogadores(); 

        res.setHeader("Content-Type", "application/pdf");
        res.setHeader("Content-Disposition", "inline; filename=jogadores.pdf");

        const doc = new PDFDocument();
        doc.pipe(res);

        // Título
        doc.fontSize(30).text("Relatório de Jogadores", { align: "center" });
        doc.moveDown();

        // Cabeçalho
        doc.fontSize(20).text("Id | Name | Idade | Gols", { underline: true });
        doc.moveDown(0.5);

        // Adicionar dados dos jogadores
        jogadores.forEach((jogador) => {
            doc.text(
                `${jogador.id} | ${jogador.name} | ${jogador.idade} | ${jogador.gols}`
            );
        });

        doc.end();
    } catch (error) {
        res.status(500).json({ message: "Erro ao gerar PDF!", error: error.message });
    }
};

module.exports = { exportJogadorPDF, exportJogadorCSV };