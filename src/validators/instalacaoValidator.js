const instalacaoValidator = {
    nome: {
        required: "O campo Nome é Obrigatório", 
        minLength: {
            value: 3,
            message: "Quantidade mínima de caracteres não informado"
        },
        maxLength: {
            value: 50,
            message: "Quantidade máxima de caracteres ultrapassada"
        },
        min: {
            value: 3,
            message: "O valor mínimo é 3"
        },
    },
    periodo: {
        required: "O campo data e hora é Obrigatório",
        
    },
    protocolo: {
        required: "O campo protocolo é obrigatório, para identificação de contrato",
        minLength: {
            value: 1,
            message: "Quantidade mínima de caracteres não informado"
        },
        maxLength: {
            value: 6,
            message: "Quantidade máxima de caracteres ultrapassada"
        },
        min: {
            value: 1,
            message: "O valor mínimo é 3"
        },
    },
    telefone: {
        minLength: {
            value: 9,
            message: "Quantidade mínima de caracteres não informado"
        },
    },
}

export default instalacaoValidator