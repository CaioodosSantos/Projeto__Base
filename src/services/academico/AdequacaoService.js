class AdequacaoService {
    getAll(){
        const adequacaos = localStorage.getItem('adequacaos')
        return adequacaos ? JSON.parse(adequacaos) : []
    }

    get(id){
        const adequacaos = this.getAll()
        return adequacaos[id]
    }

    create(dados){
        const adequacaos = this.getAll()
        adequacaos.push(dados)
        localStorage.setItem('adequacaos', JSON.stringify(adequacaos)) 
    }

    update(id, dados){
        const adequacaos = this.getAll()
        adequacaos.splice(id, 1, dados)
        localStorage.setItem('adequacaos', JSON.stringify(adequacaos))
    }

    delete(id){
        const adequacaos = this.getAll()
        adequacaos.splice(id, 1)
        localStorage.setItem('adequacaos', JSON.stringify(adequacaos))
    }
}

export default new AdequacaoService()