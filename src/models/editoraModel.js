const pool = require('../config/database');

const getEditoras = async (nacionalidade) => {
    if (!nacionalidade) {
        const result = await pool.query("SELECT * FROM editoras");
        return result.rows;
    } else {
        const result = await pool.query("SELECT * FROM editoras WHERE nacionalidade = $1", [nacionalidade]);
        return result.rows;
    }
};

const getEditora = async (id) => {
    const result = await pool.query("SELECT * FROM editoras WHERE id = $1", [id]);
    return result.rows[0];
}

const createEditora = async (name, nacionalidade, nascimento) => { 
    const result = await pool.query(
        "INSERT INTO editoras (name, nascimento, nacionalidade) VALUES ($1, $2, $3) RETURNING *",
        [name, nascimento, nacionalidade]
    );
    return result.rows[0];
}

const updateEditora = async (id, name, nacionalidade, nascimento) => {
    const result = await pool.query(
        "UPDATE editoras SET name = $1, nascimento = $2, nacionalidade = $3 WHERE id = $4 RETURNING *",
        [name, nascimento, nacionalidade, id]
    );
    return result.rows[0];
}

const deleteEditora = async (id) => {
    const result = await pool.query("DELETE FROM editoras WHERE id = $1 RETURNING *", [id]);
    if (result.rowCount === 0) {
        return { error: "Editora não encontrada." };
    }
    return { message: "Editora deletada com sucesso." };
};

module.exports = { getEditoras, getEditora, createEditora, updateEditora, deleteEditora };