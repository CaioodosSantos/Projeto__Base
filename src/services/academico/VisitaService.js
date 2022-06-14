class VisitaService {
    getAll(){
        const visitas = localStorage.getItem('visitas') 
        return visitas ? JSON.parse(visitas) : []
    }

    get(id){
        const visitas = this.getAll()
        return visitas[id]
    }

    create(dados){
        const visitas = this.getAll()
        visitas.push(dados)
        localStorage.setItem('visitas', JSON.stringify(visitas))
    }

    update(id, dados){
        const visitas = this.getAll()
        visitas.splice(id, 1, dados)
        localStorage.setItem('visitas', JSON.stringify(visitas))
    }

    delete(id){
        const visitas = this.getAll()
        visitas.splice(id, 1)
        localStorage.setItem('visitas', JSON.stringify(visitas))
    }
}

export default new VisitaService()