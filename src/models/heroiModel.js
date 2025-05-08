const pool = require("../config/database");

const getAllHerois = async () => {
    const result = await pool.query(`SELECT heroes.*, editora.name AS editora_name 
        FROM heroes
        LEFT JOIN editora ON heroes.id = editora.hero_id`);
    return result.rows
}

const getHeroiById = async (id) => {
    const result = await pool.query(
      `SELECT heroes.*, editora.name AS editora_name
       FROM heroes
       LEFT JOIN editora ON heroes.id = editora.hero_id
       WHERE heroes.id = $1`, [id]
    );
    return result.rows;
  };
  

const createHeroi = async (name, poder, photo) => {
    const result = await pool.query(`INSERT INTO heroes (name, poder, photo) VALUES ($1, $2, $3) RETURNING *`, [name, poder, photo])
    return result.rows[0]
}

const updateHeroi = async (name, poder) => {
    const result = await pool.query(
        `UPDATE heroes SET name = $1, poder = $2 WHERE id = $3 RETURNING *`,
        [name, poder, id]
    );
    return result.rows[0];
};

const deleteHeroi = async (id) => {
    const result = await pool.query(`DELETE FROM heroes WHERE id = $1 RETURNING *`, [id])
    if (result.rowCount === 0) {
        return { error: "Heroi não encontrado!" };
    }
    return { message: "Heroi deletado com sucesso!" };
}

module.exports = { getAllHerois, getHeroiById, createHeroi, updateHeroi, deleteHeroi };