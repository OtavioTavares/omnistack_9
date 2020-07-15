const express = require ("express")
const mongoose = require("mongoose")
const cors = require('cors')
const path = require("path")

const routes = require("./routes")

const app = express()

mongoose.connect("mongodb+srv://cluster_1:cluster_1@cluster0.vom3r.mongodb.net/bd_cluster?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// GET, POST, PUT, DELETE (buscar, criar, alterar e deletar)

// req.query = Acessar query params (Bom para filtros)
// req.params = Acessar os parametros das rotas (para Ediçao, delele)
// req.body = Acessar o corpo da requisiçao (para criaçao, ediçao)
// express.json = Utilizar formato json.


app.use(cors())
app.use(express.json())
//forma do express para PDF, imagens em geral quando tem um UPLOAD
app.use("/files", express.static(path.resolve(__dirname, "..", "uploads" )))
app.use(routes)


app.listen(3333)


