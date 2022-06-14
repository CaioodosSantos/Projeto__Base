class InstalacaoService {
    getAll(){
        const instalacaos = localStorage.getItem('instalacaos')
        return instalacaos ? JSON.parse(instalacaos) : []
    }

    get(id){
        const instalacaos = this.getAll()
        return instalacaos[id]
    }

    create(dados){
        const instalacaos = this.getAll()
        instalacaos.push(dados)
        localStorage.setItem('instalacaos', JSON.stringify(instalacaos)) 
    }

    update(id, dados){
        const instalacaos = this.getAll()
        instalacaos.splice(id, 1, dados)
        localStorage.setItem('instalacaos', JSON.stringify(instalacaos))
    }

    delete(id){
        const instalacaos = this.getAll()
        instalacaos.splice(id, 1)
        localStorage.setItem('instalacaos', JSON.stringify(instalacaos)) 
    }
}

export default new InstalacaoService()