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


module.exports = { getHerois, }