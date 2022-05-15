import express from "express"
import db from "./config/dbConnect.js"
import routes from "./routes/index.js"
import bodyParser from "body-parser"

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
    console.log('conexão com o banco feita com sucesso')
})

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



routes(app);

export default app