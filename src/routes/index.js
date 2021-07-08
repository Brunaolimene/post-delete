const express = require("express")
const router = express.Router();


router.get("/", (request, response)=> {
    response.status(200).send({
"titulo": "servidor-para-casa API - Reprograma",
"version": "1.0.0",
"mensagem": "Bem vindo, espero que goste da minha API de contatos <3"



    })
});

module.exports = router;
