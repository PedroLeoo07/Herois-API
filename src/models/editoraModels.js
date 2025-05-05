const pool = require("../config/database");

const getEditors = async () => {
    const result = await pool.query("SELECT * FROM editors");
    return result.rows
};

const getEditorById = async (id) => {
    const result = await pool.query("SELECT * FROM editors WHERE id = $1", [id]);
    return result.rows[0];
};

const createEditor = async (nome, sexo, idade, photo) => {
    const result = await pool.query(
        "INSERT INTO editors (nome, sexo, idade, photo) VALUES ($1, $2, $3, $4) RETURNING *",
        [nome, sexo, idade, photo]
    );
    return result.rows[0];
};

const updateEditor = async (id, nome, sexo, idade) => {
    const result = await pool.query(
        "UPDATE editors SET nome = $1, sexo = $2, idade = $3 WHERE id = $4 RETURNING *",
        [nome, sexo, idade, id]
    );
    return result.rows[0];
};

const deleteEditor = async (id) => {
    const result = await pool.query("DELETE FROM editors WHERE id = $1 RETURNING *", [id]);
    if (result.rowCount === 0) {
        return { error: "Editor não encontrado" };
    }
    return { message: "Editor deletado com sucesso" };
};

module.exports = {
    getEditors,
    getEditorById,
    createEditor,
    updateEditor,
    deleteEditor
};