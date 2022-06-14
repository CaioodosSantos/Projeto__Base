class RetiradaService {
    getAll(){
        const retiradas = localStorage.getItem('retiradas') 
        return retiradas ? JSON.parse(retiradas) : []
    }

    get(id){
        const retiradas = this.getAll()
        return retiradas[id]
    }

    create(dados){
        const retiradas = this.getAll()
        retiradas.push(dados)
        localStorage.setItem('retiradas', JSON.stringify(retiradas))
    }

    update(id, dados){
        const retiradas = this.getAll()
        retiradas.splice(id, 1, dados)
        localStorage.setItem('retiradas', JSON.stringify(retiradas))
    }

    delete(id){
        const retiradas = this.getAll()
        retiradas.splice(id, 1)
        localStorage.setItem('retiradas', JSON.stringify(retiradas))
    }
}

export default new RetiradaService()