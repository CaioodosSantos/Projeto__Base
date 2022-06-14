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
      <h1>Mudanças de enredeço e ponto</h1>

      <Link style={{textDecoration: 'none'}} to={'/mudancas/create'}><IoIosAddCircleOutline></IoIosAddCircleOutline>Incluir novo</Link> 

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Data inicio</th>
            <th>Data fim</th>
          </tr>
        </thead>
        <tbody>
          {mudancas.map((item, i) => (
            <tr key={i}>
              <td>
              <Link style={{textDecoration: 'none'}} to={'/mudancas/' + i}><FiEdit></FiEdit>Edit </Link>{'    '}
              <Button onClick={() => apagar(i)} startIcon={<DeleteIcon /> }>Delete </Button> 
              </td>
              <td>{item.nome}</td>
              <td>{item.datainicio}</td>
              <td>{item.datafim}</td>
            </tr>
          ))}
        </tbody>
      </Table>



    </div>
  )
}

export default MudancasLista