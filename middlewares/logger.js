function logger(req, res, next) {
    console.log("👉 Middleware logger ejecutado"); 
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next(); // sigue a la ruta final
}

module.exports = logger;
