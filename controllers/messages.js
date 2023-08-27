// Incluir as bibliotecas
// Gerenciar as requisições, rotas e URLSearchParams, entre outras funcionalidades
const express = require("express")
//  Chamar a função
const Router = express.Router()

// incluir a conexão com banco de dados
const DB = require("../DB/models")

//  Criar a rota cadastrar
Router.post("/", async (req, res) => {

    //  Receber os dados enviados no corpo da requisição
    let data = req.body

    // Salvar no banco de dados
    await DB.Messages.create(data).then((dataMessage) => {
        return res.json({
            error: false,
            mensagem: "Usuário cadastrado com sucesso!",
            data: dataMessage
        })
    }).catch((error)=>{
        return res.json({
            error: false,
            mensagem: `Error: Usuário não cadastrada com sucesso! ${error}`,
        })
    })

})

module.exports = Router