const joi = require('joi')


const schemaUsuario = joi.object({
    nome: joi.string().required().messages({
        'any.required': 'O campo nome é obrigatório!',
        'string.empty': 'O campo nome é obrigatório!',

    }),
    email: joi.string().email().required().messages({
        'any.required': 'O campo email é obrigatório!',
        'string.empty': 'O campo email é obrigatório!',
        'string.email': 'O email precisa ter um formato válido'

    }),
    senha: joi.string().required().min(5).messages({
        'any.required': 'O campo senha é obrigatório!',
        'string.empty': 'O campo senha é obrigatório!',
        'string.min': 'A senha precisa conter no mínimo 5 caracteres'
    })
})


module.exports = schemaUsuario
