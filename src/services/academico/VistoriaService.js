class VistoriaService {
    getAll(){
        const vistorias = localStorage.getItem('vistorias')
        return vistorias ? JSON.parse(vistorias) : []
    }

    get(id){
        const vistorias = this.getAll()
        return vistorias[id]
    }

    create(dados){
        const vistorias = this.getAll()
        vistorias.push(dados)
        localStorage.setItem('vistorias', JSON.stringify(vistorias)) 
    }

    update(id, dados){
        const vistorias = this.getAll()
        vistorias.splice(id, 1, dados)
        localStorage.setItem('vistorias', JSON.stringify(vistorias))
    }

    delete(id){
        const vistorias = this.getAll()
        vistorias.splice(id, 1)
        localStorage.setItem('vistorias', JSON.stringify(vistorias))
    }
}

export default new VistoriaService()