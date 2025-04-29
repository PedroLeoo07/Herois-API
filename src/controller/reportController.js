const editorModels = require("../models/editorModels");
const heroiModels = require("../models/heroiModels");
const PDFDocument = require("pdfkit");

const exportEditorsPDF = async (req, res) => {
  try {
    const editor = await editorModels.getEditors();

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-disposition", "inline; filename=editors.pdf");

    const doc = new PDFDocument();
    doc.pipe(res);

    // Título
    doc
      .fontSize(20)
      .text("Relatório de Editores", { align: "center", underline: true });
    doc.moveDown(1);

    // Cabeçalho
    doc.fontSize(12).text("Id | Nome | Sexo | Idade", { underline: true });
    doc.moveDown(0.5);

    // Conteúdo com linhas alternadas e espaçamento
    let isAlternate = false;
    users.forEach((user) => {
      if (isAlternate) doc.fillColor("#f0f0f0").rect(50, doc.y, 500, 15).fill();
      doc
        .fillColor("black")
        .text(`${editor.id}    ${editor.nome}    ${editor.sexo}    ${editor.idade}`);
      doc.moveDown(0.5); // Espaçamento entre linhas
      isAlternate = !isAlternate;
    });

    doc.end();
  } catch (error) {
    res.status(500).json({ message: "Erro ao gerar o PDF" });
  }
};

const exportHeroiPDF = async (req, res) => {
  try {
    const heroi = await heroiModels.getHerois();

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-disposition", "inline; filename=herois.pdf");

    const doc = new PDFDocument();
    doc.pipe(res);

    // Título
    doc
      .fontSize(20)
      .text("Relatório de Herois", { align: "center", underline: true });
    doc.moveDown(1);

    // Cabeçalho
    doc
      .fontSize(12)
      .text(
        "Id | Editor ID | poder | photo",
        { underline: true }
      );
    doc.moveDown(0.5);

    // Conteúdo com linhas alternadas e espaçamento
    let isAlternate = false;
    posts.forEach((post) => {
      if (isAlternate) doc.fillColor("#f0f0f0").rect(50, doc.y, 500, 15).fill();
      doc
        .fillColor("black")
        .text(
          `${heroi.id}    ${heroi.editor_id}    ${heroi.poder}    ${
            heroi.photo }`
        );
      doc.moveDown(0.5); // Espaçamento entre linhas
      isAlternate = !isAlternate;
    });

    doc.end();
  } catch (error) {
    res.status(500).json({ message: "Erro ao gerar o PDF" });
  }
};

module.exports = { exportEditorsPDF, exportHeroiPDF };