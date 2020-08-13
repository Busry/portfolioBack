const pool = require('../models/pool');

/* GET users listing. */
const allUsers = async (req, res, next) => {
  //   const users = [
  //     { id: 1, name: 'Ali' },
  //     { id: 2, name: 'Bali' },
  //     { id: 3, name: 'Alima' },
  //   ];
  try {
    const query = 'SELECT * from users';
    const result = await pool.query(query);
    res.status(200).json(result.rows);
  } catch (err) {
    console.log('ERROR ' + err);
  }
  //   res.send(users);
};

module.exports = { allUsers };
