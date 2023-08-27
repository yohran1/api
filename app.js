// Incluir as bibliotecas
// Gerenciar as requisições, rotas e URLSearchParams, entre outras funcionalidades
const express = require("express")
// Conectar a biblioteca para permitir conexão externa
const CORS = require("cors")
const app = express()
const PORT = 5000


//  Criar o middleware para receber os dados no corpo da requisição OBS: oque é middleware? é uma instrução que vai ser executada antes de acessar a rota 
app.use(express.json())

// Criar o middleware para permitir requisição externa
app.use((req, res, next) => {
    // Qualquer endereço pode fazer a requisição
    res.header("Access-Control-Allow-Origin", "*")
    // Tipos de métodos que a API aceita
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE")
    // Permitir o envio de dados para API
    res.header("Access-Control-Allow-Headers", "Content-Type")
    // Executar o Cors
    app.use(CORS())
    // Quando não houver error deve continuar o processamento
    next()
})

//  Incluir as funcionalidades do CONTROLLERS
const messages = require("./controllers/messages")

//  Criar rotas
app.use("/message", messages)


app.listen(PORT, ()=> { console.log(`Server Running in PORT: ${PORT}`) })