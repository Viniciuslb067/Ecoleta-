const express = require("express")
const server = express()

// Configurar pasta public
server.use(express.static("public"))

// Ultilizando template engine 
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true  
})

// Configurar caminhos da minha aplicação
// Página inicial
// req: Requisição
// res: Resposta
server.get("/", (req, res) => {
    return res.render("index.html", { title:"Um Título" })
})

server.get("/create-point", (req, res) => {
    return res.render("create-point.html")
})

server.get("/search", (req, res) => {
    return res.render("search-results.html")
})


// Ligar o Servidor 
server.listen(3000)