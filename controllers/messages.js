// Incluir as bibliotecas
// Gerenciar as requisições, rotas e URLSearchParams, entre outras funcionalidades
const express = require("express")
//  Chamar a função
const Router = express.Router()

//  Criar a rota cadastrar
Router.post("/", async (req, res) => {

    //  Receber os dados enviados no corpo da requisição
    let data = req.body

    return res.json({
        error: false,
        mensagem: "Mensagem cadastrada com sucesso!",
        data
    })
})

module.exports = Router