const adequacaoValidator = {
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
        capacidade: {
            required: "A capacidade é Obrigatória",
            minLength: {
                value: 1,
                message: "Qtd mínima de caracteres não informado" 
            },
            maxLength: {
                value: 5,
                message: "Qtd máxima de caracteres ultrapassada"
            },
            min: {
                value: 1,
                message: "O valor mínimo é 1"
            },
        }
}

export default adequacaoValidator