const pool = require('../config/database');

const getHerois = async (description) => {
    if(!description) {
        const result = await pool.query('SELECT herois.* editores.nome AS editor FROM herois LEFT JOIN editores ON herois.id_editor = editores.id');
        return result.rows;
} else {
    const result = await pool.query('SELECT herois.* editores.nome AS editor FROM herois LEFT JOIN editores ON herois.id_editor = editores.id WHERE herois.nome ILIKE $1', [`%${description}%`]);
    return result.rows;
}
};

const getHeroisById = async (id) => {
    const result = await pool.query('SELECT herois.* editores.nome AS editor FROM herois LEFT JOIN editores ON herois.id_editor = editores.id WHERE herois.id = $1', [id]);
    return result.rows[0];
};

const createHeroi = async (nome, poder, photo) => {
    const result = await pool.query('INSERT INTO herois (nome, poder, photo) VALUES ($1, $2, $3) RETURNING *', [nome, poder, photo]);
    return result.rows[0];
}

const updateHeroi = async (id, nome, poder) => {
    const result = await pool.query('UPDATE herois SET nome = $1, poder = $2 WHERE id = $3 RETURNING *', [nome, poder, id]);
    return result.rows[0];
};

const deleteHeroi = async (id) => {
    const result = await pool.query('DELETE FROM herois WHERE id = $1 RETURNING *', [id]);
   if (result.rowCount === 0) {
        throw new Error('Heroi não encontrado');
    }
    return result.rows[0];
}

module.exports = { getHerois, getHeroisById, createHeroi, updateHeroi, deleteHeroi };