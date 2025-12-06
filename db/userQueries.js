const pool = require("./pool");

async function getAllUsers() {
  const result = await pool.query("SELECT * FROM users");
  return result.rows;
}

async function createUser(name, email) {
  const result = await pool.query(
    "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
    [name, email]
  );
  return result.rows[0];
}

async function updateUser(name, email, id) {
  const result = await pool.query(
    "UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *"
    [name, email, id]
  );
  return result.rows[0];
}

async function deleteUser(id) {
  const result = pool.query(
    "DELETE FROM users WHERE id = $1 RETURNING *",
    [id]
  );
  return result.rows[0];
}

module.exports = { getAllUsers, createUser, updateUser, deleteUser};
