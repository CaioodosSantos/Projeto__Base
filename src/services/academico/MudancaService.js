class MudancaService {
    getAll(){
        const mudancas = localStorage.getItem('mudancas')
        return mudancas ? JSON.parse(mudancas) : []
    }

    get(id){
        const mudancas = this.getAll()
        return mudancas[id]
    }

    create(dados){
        const mudancas = this.getAll()
        mudancas.push(dados)
        localStorage.setItem('mudancas', JSON.stringify(mudancas))
    }

    update(id, dados){
        const mudancas = this.getAll()
        mudancas.splice(id, 1, dados)
        localStorage.setItem('mudancas', JSON.stringify(mudancas)) 
    }

    delete(id){
        const mudancas = this.getAll()
        mudancas.splice(id, 1)
        localStorage.setItem('mudancas', JSON.stringify(mudancas))
    }
}

export default new MudancaService()