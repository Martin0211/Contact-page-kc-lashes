const app = require("./app");
const {conn} = require("./src/models/index");
const { PORT } = require("./config");

conn.sync({
    force: true
}).then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor funcionando en el puerto ${PORT}`);
    })
})