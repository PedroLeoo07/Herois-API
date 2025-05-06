const pool = require('../config/database');

const getJogadores = async (idade) => {
    if (!idade) {
        const result = await pool.query("SELECT * FROM jogadores");
        return result.rows;
    } else {
        const result = await pool.query("SELECT * FROM jogadores WHERE idade = $1", [idade]);
        return result.rows;
    }
};

const getJogador = async (id) => {
    const result = await pool.query("SELECT * FROM jogadores WHERE id = $1", [id]);
    return result.rows[0];
}

const createJogador = async (name, idade, gols, photo) => { 
    const result = await pool.query(
        "INSERT INTO jogadores (name, idade, gols, photo) VALUES ($1, $2, $3, $4) RETURNING *",
        [name, idade, gols, photo]
    );
    return result.rows[0];
}

const updateJogador = async (id, name, idade, gols) => {
    const result = await pool.query(
        "UPDATE jogadores SET name = $1, idade = $2, gols = $3 WHERE id = $4 RETURNING *",
        [name, idade, gols, id]
    );
    return result.rows[0];
}

const deleteJogador = async (id) => {
    const result = await pool.query("DELETE FROM jogadores WHERE id = $1 RETURNING *", [id]);
    if (result.rowCount === 0) {
        return { error: "Jogador não encontrado." };
    }
    return { message: "Jogador deletado com sucesso." };
};

module.exports = { getJogadores, getJogador, createJogador, updateJogador, deleteJogador };