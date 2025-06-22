const app = require("./app");
const { AppDataSource } = require("./database/data-source");

AppDataSource.initialize()
  .then(() => {
    console.log("📦 Banco de dados conectado com sucesso!");
    app.listen(3333, () => {
      console.log("🚀 Server running on http://localhost:3333");
    });
  })
  .catch((err) => {
    console.error("❌ Erro ao conectar no banco de dados:", err);
  });