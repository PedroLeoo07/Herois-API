const pool = require("../config/database");

const getAllTimes = async () => {
    const result = await pool.query(`SELECT times.*, jogadores.name AS jogadores_name 
        FROM times
        LEFT JOIN jogadores ON times.jogador_id = jogadores.id`);
    return result.rows
}

const getTimeById = async (id) => {
    const result = await pool.query(
      `SELECT times.*, jogadores.name AS jogador_name
       FROM times
       LEFT JOIN jogadores ON times.jogador_id = jogadores.id
       WHERE times.id = $1`, [id]
    );
    return result.rows;
  };
  

const createTime = async (name, logo) => {
    const result = await pool.query(`INSERT INTO times (name, logo) VALUES ($1, $2, $3) RETURNING *`, [name, logo])
    return result.rows[0]
}

const updateTime = async (id, name, logo, jogador_id) => {
    const result = await pool.query(
        `UPDATE times SET name = $1, logo = $2, jogador_id = $3 WHERE id = $4 RETURNING *`,
        [name, logo, jogador_id, id]
    );
    return result.rows[0];
};

const deleteTime = async (id) => {
    const result = await pool.query(`DELETE FROM times WHERE id = $1 RETURNING *`, [id])
    if (result.rowCount === 0) {
        return { error: "Time não encontrado!" };
    }
    return { message: "Time deletado com sucesso!" };
}

module.exports = { getAllTimes, getTimeById, createTime, updateTime, deleteTime };