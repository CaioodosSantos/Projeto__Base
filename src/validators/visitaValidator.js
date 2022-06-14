const visitaValidator = {
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

    curso_id: {
        required: true
    },

    data: {
        required: "O campo data é Obrigatório",
    },
    
    telefone: {
        minLength: {
            value: 9,
            message: "Quantidade mínima de caracteres não informado"
        },
    },
}

export default visitaValidator