import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import MudancaService from '../../services/academico/MudancaService'
import { IoIosAddCircleOutline } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import DeleteIcon from '@mui/icons-material/Delete';
import { Button  } from '@mui/material'

const MudancasLista = () => {

  const [mudancas, setMudancas] = useState([]) 

  useEffect(() => {

    setMudancas(MudancaService.getAll())

  }, [])

  function apagar(id) {
    if(window.confirm('Deseja realmente excluir o registro?')){ 
      MudancaService.delete(id)
      setMudancas(MudancaService.getAll())
    }
  }

  return (
    <div>
      <h1>Mudanças de endereço e ponto</h1>

      <Link style={{textDecoration: 'none'}} to={'/mudancas/create'}><IoIosAddCircleOutline></IoIosAddCircleOutline>Incluir novo</Link> 

      <Table striped bordered hover>
        <thead>
        <tr class="table-dark">
            <th>Tipo</th>
            <th>Nome</th>
            <th>Data</th>
            <th>Novo endereço</th>
            <th>Modificação</th>
          </tr>
        </thead>
        <tbody>
          {mudancas.map((item, i) => (
            <tr key={i} class="table-primary">
              <td>{item.tipo}</td>
              <td>{item.nome}</td>
              <td>{item.data}</td>
              <td>{item.endereço}</td>
              <td>
              <Link style={{textDecoration: 'none'}} to={'/mudancas/' + i}><FiEdit></FiEdit>Edit </Link>{'    '}
              <Button onClick={() => apagar(i)} startIcon={<DeleteIcon /> }>Delete </Button> 
              </td>
            </tr>
          ))}
        </tbody>
      </Table>



    </div>
  )
}

export default MudancasLista