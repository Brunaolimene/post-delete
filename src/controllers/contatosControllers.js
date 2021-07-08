
const { request, response } = require("express");
const contatosJson = require("../models/contatos.json");

const getAll = (request, response) => {
    response.status(200).send(contatosJson)
}
const getByName = (request, response) =>{
    const nameRequered = request.query.name
    const nameFiltered = contatosJson.find(contatos => contatos.name.includes(nameRequered))
    response.status(200).send(nameFiltered)
    console.log(nameRequered)
}

const getById = (request, response) => {
    const idRequired = request.params.id
    const contactsFiltered = contatosJson.find(contatos => contatos.id == idRequired)

    response.status(200).send(contactsFiltered)
}
 
const createContacts = (request, response) =>{
 
    const nameRequered =  request.body.name;
    const celphoneRequered = request.body.celphone;
    const socialNetworks = request.body.socialNetworks;
 
     const newContact = {
     id: 3,
     name: nameRequered,
     celphone: celphoneRequered,
     socialNetworks: socialNetworks
 };

 contatosJson.push(newContact); 

 response.status(200).send(newContact);

};

const deleteContacts = (request, response) => {
    const idRequired = request.params.id;
    const contactsFiltered = contatosJson.find(contatos => contatos.id == idRequired);

    const indice = contatosJson.indexOf(contactsFiltered)
    
    contatosJson.splice(indice, 1);

    response.status(200).send(
       [ 
        {

        "message": "Contato deletado com sucesso!"
        },
       ]
    )
}


module.exports = { 
    getAll,
    getByName,
    getById,
    createContacts,
    deleteContacts
}