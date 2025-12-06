const pool = require("./pool");

async function testConnection() {
  try {
    const result = await pool.query("SELECT NOW()");
    console.log("Conexión OK →", result.rows[0]);
  } catch (err) {
    console.error("Error al conectar:", err);
  } finally {
    pool.end();
  }
}

testConnection();
