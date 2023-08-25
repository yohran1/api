// Incluir as bibliotecas
// Gerenciar as requisições, rotas e URLSearchParams, entre outras funcionalidades
const express = require("express")
const app = express()
const PORT = 5000


//  Criar o middleware para receber os dados no corpo da requisição OBS: oque é middleware? é uma instrução que vai ser executada antes de acessar a rota 
app.use(express.json())

//  Incluir as funcionalidades do CONTROLLERS
const messages = require("./controllers/messages")

//  Criar rotas
app.use("/message", messages)


app.listen(PORT, ()=> { console.log(`Server Running in PORT: ${PORT}`) })