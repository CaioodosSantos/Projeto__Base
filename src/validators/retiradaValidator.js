const retiradaValidator = {
    nome: {
        required: "O campo Nome é Obrigatório",
        minLength: {
            value: 3,
            message: "Qtd mínima de caracteres não informado" 
        },
        maxLength: {
            value: 50,
            message: "Qtd máxima de caracteres ultrapassada"
        },
        min: {
            value: 3,
            message: "O valor mínimo é 3"
        },
    },
    cpf:{
        required: "O campo CPF é Obrigatório",
        minLength: {
            value: 11,
            message: "Qtd mínima de caracteres não informado"
        },
        maxLength: {
            value: 11,
            message: "Qtd máxima de caracteres ultrapassada"
        },
    }
}

export default retiradaValidator